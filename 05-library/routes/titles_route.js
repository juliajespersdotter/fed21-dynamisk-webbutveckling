const express = require('express');
const router = express.Router();
const titles_controller = require('../controllers/titles_controller');

// Implementera GET / READ - Alla
router.get('/', titles_controller.read);

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', titles_controller.read);

router.post('/', titles_controller.create);

router.put('/:id', titles_controller.update);

// Kan testas med curl -X PUT http://localhost:3000/pokemoncards/4 -H 'Content-Type: application/json' -d '{ "name": "Bobba Fett", "hp": 120, xp: 0 }'
router.delete('/:id', titles_controller.destroy);


module.exports = router;