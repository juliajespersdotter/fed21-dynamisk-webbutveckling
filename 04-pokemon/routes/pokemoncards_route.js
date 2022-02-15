const express = require('express');
const router = express.Router();

// Implementera GET / READ - Alla
router.get('/', (req, res) => {     // => /pokemoncards/
    res.send('GET not implemented');
});

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', (req, res) => {
    res.send('GET ' + req.params.id + ' not implemented yet!');
});

router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});

router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

// Kan testas med curl -X PUT http://localhost:3000/pokemoncards/(id)
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});


module.exports = router;