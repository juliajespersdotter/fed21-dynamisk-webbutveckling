const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/bodyParser', (req, res) => {
    console.log('GET /bodyParser');
    console.log(req.query); // Vid GET -- data i query
    console.log('Name = ' + req.query.name);
    console.log('Profile = ' + req.query.profile);
    res.send('OK'); // Skicka tillbaka ett svar
});

const bodyParser = require('body-parser');
const urlEncodedBodyParser = bodyParser.urlencoded( { extended: false } );

app.post('/bodyParser', urlEncodedBodyParser, (req, res) => {
    console.log(req.query); // Vid GET -- data i query
    console.log(req.body);
    console.log("Name = " + req.body.name);
    console.log("Profile = " + req.body.profile);
    res.send('OK');
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});