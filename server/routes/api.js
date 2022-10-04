const express = require('express');
const soundboardController = require('../controllers/soundboardController');
const loginController = require('../controllers/loginController');
const router = express.Router();


router.get('/main',
    loginController.checkCookies,
    soundboardController.getButtons,
    (req, res) => res.status(200).json(res.locals.buttons));


// main page
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
// })

router.post('/login', 
    loginController.checkCredentials, 
    loginController.setCookie,
    (req, res) => res.status(200).json({}));

router.delete('/logout', 
    loginController.logout,
    (req, res) => res.status(200).json('success'));

    
// router.get('/main', 
//     loginController.checkCookie,
//     (req, res) => res.status(200).json({}));


// router.post('/signup', (req, res) => res.status(200).json({}));

// router.get('/login', (req, res) => res.status(200).json({}));



// router.get('/login', (req, res) => res.status(200).json({}));

// router.patch('/main', (req, res) => res.status(200).json({}));

router.get('/sounds', soundboardController.getSounds, (req, res) => res.status(200).json(res.locals.sounds));

module.exports = router;