const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
// must keep express.static to serve bundle.js
app.use('/build', express.static(path.join(__dirname, "../build")));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(3000, () => {
    console.log('Server listening on Port 3000')
});

// module.exports = app;