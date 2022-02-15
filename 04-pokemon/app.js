const express = require('express');
const app = express();

// Ladda bodyParsers
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});