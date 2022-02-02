/**
 * Creating an express server
 */

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// When a GET request for `/` (http://localhost:3000/) is received, run this function
app.get('/', (req, res) => {
    // req = information om den inkommande förfrågan
    // res = metoder för att skicka ett svar på förfrågan
    res.send('Hello World!');
    console.log(req.method, req.url);
    console.log("Someone requested my root!");
})

// respond to GET request for `/nom` 
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/index.html'));
})

// respond to GET request for `/about` 
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/about.html'));
})

// respond to GET request for `/api/nom``
app.get('/nom', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/nom.html'));
}) 

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})