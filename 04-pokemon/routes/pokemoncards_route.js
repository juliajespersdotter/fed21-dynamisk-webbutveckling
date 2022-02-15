const express = require('express');
const router = express.Router();
const pokemoncards_controller = require('../controllers/pokemoncards_controller');

// Implementera GET / READ - Alla
router.get('/', pokemoncards_controller.read);

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', pokemoncards_controller.read);

router.post('/', pokemoncards_controller.create);

router.put('/:id', pokemoncards_controller.update);

// Kan testas med curl -X PUT http://localhost:3000/pokemoncards/4 -H 'Content-Type: application/json' -d '{ "name": "Bobba Fett", "hp": 120, xp: 0 }'
router.delete('/:id', pokemoncards_controller.destroy);


module.exports = router;