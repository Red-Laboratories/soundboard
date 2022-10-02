const express = require('express');
const soundboardController = require('../controllers/soundboardController');
const router = express.Router();


router.get('/main', 
soundboardController.getButtons, 
(req, res) => res.status(200).json(res.locals.buttons));


// main page
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
// })

// router.post('/login', (req, res) => res.status(200).json({}));

// router.post('/signup', (req, res) => res.status(200).json({}));

// router.get('/login', (req, res) => res.status(200).json({}));

// router.get('/', (req, res) => res.status(200).json({}));


// router.get('/login', (req, res) => res.status(200).json({}));

// router.patch('/main', (req, res) => res.status(200).json({}));

// router.get('/sound', (req, res) => res.status(200).json({}));

module.exports = router;