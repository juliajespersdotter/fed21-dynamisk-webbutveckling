const express = require('express');
const router = express.Router();
const pokemonfriends_controller = require('../controllers/pokemonfriends_controller');

// Implementera GET / READ - Alla
router.get('/', pokemonfriends_controller.read);

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', pokemonfriends_controller.read);

router.post('/', pokemonfriends_controller.create);

router.put('/:id', pokemonfriends_controller.update);

// Kan testas med curl -X PUT http://localhost:3000/pokemonfriends/(id)
router.delete('/:id', pokemonfriends_controller.destroy);

// Implementera addCard
router.post('/:id/addCard', pokemonfriends_controller.addCard);


module.exports = router;