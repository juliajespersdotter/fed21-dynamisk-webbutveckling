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
    res.send('Hello from the root.');
    console.log(req.method, req.url);
    console.log("Someone requested my root!");
})

// respond with currect time
app.get('/now', (req, res) => {
    res.send(`The current time is ${new Date()}`);
})

app.get('/jokes', (req, res) => {
    
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