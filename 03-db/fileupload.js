const express = require('express');
const app = express();
const multer = require('multer'); // Ladda in Multer

app.use(express.static('static'));

/*
const urlencoded = express.urlencoded({ extended: false });
const jsonencoder = express.json();
*/

// app.use(urlencoded);

const storageObj = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = (new Date()).valueOf().toString() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniqueSuffix + '-' + file.originalname); // Hur får man till ett unikt filnamn?
        }
    }
);
const multipartDataEncoder = multer({ storage: storageObj }); // Using multer object

app.post('/upload', multipartDataEncoder.single('myFile'),  (req, res) =>{
    console.log(req.file);
    res.send(req.file); // send back file to client
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});