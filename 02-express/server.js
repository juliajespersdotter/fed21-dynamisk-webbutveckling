/**
 * Creating an express server
 */

const express = require('express');
const oneliners = require('./data/oneliners.json');
const _ = require('lodash');
const morgan = require('morgan');
const fs = require('fs'); // The fs module enables interacting with the file
const ejs = require('ejs');

const app = express();
const port = 3000;

// use morgan http request logger
app.use( morgan ('dev') );

// Middleware
// app.use((req, res, next) => {
//     console.log(`Incoming ${req.method} request for ${req.url}`);
//     next();
// })

// When a GET request for `/` (http://localhost:3000/) is received, run this function
app.get('/', (req, res) => {
    // req = information om den inkommande förfrågan
    // res = metoder för att skicka ett svar på förfrågan
    res.send('Hello from the root.');
})

// respond with currect time
app.get('/now', (req, res) => {
    res.send(`The current time is ${new Date()}`);
})

app.get('/jokes', (req, res) => {
    // 1. Somehow read the JSON-contents of data/oneliners.json
    // 2. Get a random item from the array
    // 3. Respond with the item (`res.send(item)`)

    let joke = _.sample(oneliners);
    res.send(joke);
})

// Serve files from `/pages`if not other route matches are found
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


// // respond to GET request for `/nom` 
// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname+'/pages/index.html'));
// })

// // respond to GET request for `/about` 
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname+'/pages/about.html'));
// })

// // respond to GET request for `/api/nom``
// app.get('/nom', (req, res) => {
//     res.sendFile(path.join(__dirname+'/pages/nom.html'));
// }) 