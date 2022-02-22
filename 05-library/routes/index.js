const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OK! :)');
});

router.use('/authors', require('./authors_route'));
router.use('/titles', require('./titles_route'));
router.use('/books', require('./books_route'));
router.use('/users', require('./users_route'));


module.exports = router;