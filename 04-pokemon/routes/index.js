const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OK! :)');
});

/*
const static = express.static(path.join(__dirname, '../build'));
const routes = ['./pokemoncards_route','./pokemonfriends_route','./pokemonbattles_route'];
app.use(routes, static);
*/

router.use('/pokemoncards', require('./pokemoncards_route'));
router.use('/pokemonfriends', require('./pokemonfriends_route'));
router.use('/pokemonbattles', require('./pokemonbattles_route'));


module.exports = router;