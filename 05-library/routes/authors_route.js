const express = require('express');
const router = express.Router();
const authors_controller = require('../controllers/authors_controller');
const log = require('../logging.js');

// Implementera GET / READ - Alla
router.get('/', authors_controller.read)

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', authors_controller.read);

router.post('/', authors_controller.create);

router.put('/:id', authors_controller.update);

// Kan testas med curl -X PUT http://localhost:3000/pokemoncards/4 -H 'Content-Type: application/json' -d '{ "name": "Bobba Fett", "hp": 120, xp: 0 }'
router.delete('/:id', authors_controller.destroy);


module.exports = router;