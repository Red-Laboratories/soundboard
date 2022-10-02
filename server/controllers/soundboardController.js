const db = require('../models/soundboardModel');

const soundboardController = {};

// const createErr = (method) => {
//     return ({
//         log: `This error occured in ${method} method inside soundboardController`,
//         message: `This error occured in ${method} method inside soundboardController, check terminal for error info`
//     });
// };

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


// soundboardController.getSounds = (req, res, next) => {
//   const buttonStr = 'SELECT * FROM button_components WHERE board_id=1'
//   db
//     .query(buttonStr)
//     .then(data => {
//       res.locals.buttons = data.rows;
//       return next();
//     })
//     .catch(e => {
//         return next(createErr('getButtons'));
//     })
// }


module.exports = soundboardController;
