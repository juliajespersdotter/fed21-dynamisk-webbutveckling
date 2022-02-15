const express = require('express');
const router = express.Router();
const books_controller = require('../controllers/books_controller');

// Implementera GET / READ - Alla
router.get('/', books_controller.read);

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', books_controller.read);

router.post('/', books_controller.create);

router.put('/:id', books_controller.update);

// Kan testas med curl -X PUT http://localhost:3000/pokemoncards/4 -H 'Content-Type: application/json' -d '{ "name": "Bobba Fett", "hp": 120, xp: 0 }'
router.delete('/:id', books_controller.destroy);


module.exports = router;