/**
 * Creating an express server
 */

const express = require('express');
const oneliners = require('./data/oneliners.json');
const _ = require('lodash');
const morgan = require('morgan');
const users = require('./data/users.json');

const app = express();
const port = 3000;

// tell express to use ejs as it's view engine
app.set('view engine', 'ejs');

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
    res.render('index', { 
        title: 'My Express Server',
        users 
    });
});

// Respond to GET request for `/users/*`
app.get('/users/:userId', (req, res) => {
    let userId = req.params.userId;
    console.log(userId);

    // Somehow use req.params.userId to get the corresponding user from the users array,
    // and send that user to a view (which displays that user's information)
    res.render('user', {
        title: `user ${userId}`,
        users, 
        userId,
    });
})

// respond with currect time
app.get('/now', (req, res) => {
    res.send(`The current time is ${new Date()}`);
})

app.get('/jokes', (req, res) => {
    // 1. Somehow read the JSON-contents of data/oneliners.json

    // 2. Get a random item from the array
    let joke = _.sample(oneliners);

    // 3. Respond with the item (`res.send(item)`)
    res.render('jokes', {joke, title: 'A random oneliner for you'});
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