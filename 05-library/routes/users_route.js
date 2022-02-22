const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');

// Implementera GET / READ - Alla
router.get('/', users_controller.read);

// Implementera GET / READ - Ett Pokemonkort
router.get('/:id', users_controller.read);

router.post('/', users_controller.create);

router.put('/:id', users_controller.update);

router.delete('/:id', users_controller.destroy);

module.exports = router;