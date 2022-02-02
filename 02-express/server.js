/**
 * Creating an express server
 */

const express = require('express');
const app = express();
const port = 3000;

// When a GET request for `/` (http://localhost:3000/) is received, run this function
app.get('/', (req, res) => {
    // req = information om den inkommande förfrågan
    // res = metoder för att skicka ett svar på förfrågan
    res.send('Hello World!');
    console.log("Someone requested my root!");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})