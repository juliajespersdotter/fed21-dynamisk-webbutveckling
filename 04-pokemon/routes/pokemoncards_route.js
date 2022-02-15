const express = require('express');
const router = express.Router();
const pokemoncards_controller = require('../controllers/pokemoncards_controller');

// Implementera GET / READ - Alla
router.get('/', pokemoncards_controller.read);

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', pokemoncards_controller.read);

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