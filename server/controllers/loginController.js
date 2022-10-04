const db = require('../models/soundboardModel');

const loginController = {};

const createErr = (method) => {
  return ({
    log: `This error occured in ${method} method inside loginController`,
    message: `This error occured in ${method} method inside loginController, check terminal for error info`
  });
};


loginController.checkCredentials = (req, res, next) => {
  // get credentials from req.body and destructure them
  const { username, password:pw } = req.body;
  // console.log(pw)
  // create a query
  const query = 'SELECT * FROM person WHERE username = $1 AND password = $2;';
  // query databse to see if that username and password exists
  db.query(query, [username, pw])
    .then(dbResponse => {
      if (dbResponse.rows[0] === undefined) {
        // if file is not returned
        return res.status(401).json('failed login');
      } else {
        // if a file is returned next
        const { username, id } = dbResponse.rows[0];
        // console.log(username, id)
        res.locals.user = {
          'username': username,
          'user_id': id
        };
        return next()
      }
    })
    // err handling
    .catch(err => next(createErr(err)));
  };

loginController.setCookie = (req, res, next) => {
  // add current user to sessions table in database
  const { user_id, username } = res.locals.user;
  const session_id = Math.random().toString();
  // creates cookie
  res.cookie('SSID', session_id);//add optionality to cookie?
  
  // add cookie and user to sessions table in db
  const add = 'INSERT INTO sessions (session, user_id) VALUES ($1, $2);'
  db.query(add, [session_id, user_id])
  .then(res => {
    // console.log(res)
    return next();
  })
  .catch(err => next(createErr(err)));
};

  // req.cookies: { tracy: '0.023381441699068528' },
  // req.cookies: { SSID: '0.023381441699068528' },

loginController.checkCookies = (req, res, next) => {
  // check if there is a current cookie
  const checkCookie = 'SELECT * FROM sessions WHERE $1 = session;';
  db.query(checkCookie, [req.cookies.SSID]) //
    .then(dbRes => {
      // console.log('dbRes: ',dbRes.rows[0]);
      //if there is no response, redirect
      if (dbRes.rows[0] === undefined) {
        res.status(401).json('unauthorized');
      }
      // if there is a response, proceed
      return next();
    })
    .catch(err => { next(createErr(err)) });
}

loginController.logout = (req, res, next) => {
  // delete cookie in databse
  const deleteCookie = 'DELETE FROM sessions WHERE $1 = session;';
  db.query(deleteCookie, [req.cookies.SSID]) //
    .then(dbRes => {
      console.log('dbRes: ',dbRes.rows[0]);
      return next();
    })
    .catch(err => { next(createErr(err)) });
}


module.exports = loginController;