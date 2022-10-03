const db = require('../models/soundboardModel');

const soundboardController = {};

const createErr = (method) => {
  return ({
    log: `This error occured in ${method} method inside soundboardController`,
    message: `This error occured in ${method} method inside soundboardController, check terminal for error info`
  });
};

soundboardController.getButtons = (req, res, next) => {
  const buttonStr = 'SELECT * FROM button_components;'
  db.query(buttonStr)
    .then(data => {
      res.locals.buttons = data.rows;
      return next();
    })
    .catch(e => {
      return next(createErr('getButtons'));
    })
}


soundboardController.getSounds = (req, res, next) => {
  const query = 'SELECT * FROM sounds'
  db
    .query(query)
    .then(data => {
      const arrOfSounds = [];
      for (let i = 0; i < data.rows.length; i++) {
        arrOfSounds.push(data.rows[i].sound)
      }
      res.locals.sounds = arrOfSounds;
      return next();
    })
    .catch(e => {
      return next(createErr('getButtons'));
    })
}


module.exports = soundboardController;
