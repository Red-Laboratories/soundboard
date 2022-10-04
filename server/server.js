const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// send to api router for requests to database
app.use('/api', apiRouter);

// must keep express.static to serve bundle.js
app.use('/build', express.static(path.join(__dirname, "../build")));

app.get('/', (req, res) => {
    console.log('we should see this ');
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})



app.get('/*', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


// local error handler
app.use((req, res) => {
    // server log
    console.log('this endpoint does not exist in server.js');
    // response to client
    res.status(404).send('this page does not exist');
})

// global error handler
app.use((err, req, res, next) => {
    // create default error object
    let defaultErr = {
        log: 'there is an error with unspecified middleware',
        status: 500,
        message: { err: 'there is a server side error' }
    }
    // reassign default error object with info passed in via err arg
    defaultErr = Object.assign(defaultErr, err);
    // log server side error to server terminal
    console.log(defaultErr.log);
    // return status and client side error to client
    res.status(defaultErr.status).send(defaultErr.message);
});




app.listen(3000, () => {
    console.log('Server listening on Port 3000')
});

// module.exports = app;