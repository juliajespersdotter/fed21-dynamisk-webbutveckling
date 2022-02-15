const express = require('express');
const router = express.Router();

// Implementera GET / READ - Alla
router.get('/', (req, res) => {     // => /pokemonfriends/
    res.send('GET not implemented for pokemonfriends');
});

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', (req, res) => {
    res.send('GET ' + req.params.id + ' not implemented yet for pokemonfriends!');
});

router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});

router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented for pokemonfriends');
});

// Kan testas med curl -X PUT http://localhost:3000/pokemonfriends/(id)
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented for pokemonfriends');
});


module.exports = router;