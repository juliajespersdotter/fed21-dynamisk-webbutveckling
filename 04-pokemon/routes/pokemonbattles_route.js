const express = require('express');
const router = express.Router();

// Implementera GET / READ - Alla
router.get('/', (req, res) => {     // => /pokemonbattles/
    res.send('GET not implemented for pokemonbattles');
});

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', (req, res) => {
    res.send('GET ' + req.params.id + ' not implemented yet for pokemonbattles!');
});

router.post('/', (req, res) => {
    res.send('POST not yet implemented for pokemonbattles');
});

router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

// Kan testas med curl -X PUT http://localhost:3000/pokemonbattles/(id)
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});


module.exports = router;