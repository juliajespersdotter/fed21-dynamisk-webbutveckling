const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userValidationRules = require('../validation/user');
const registerController = require('../controllers/auth_controller');

/* GET / */
router.get('/', (req, res, next) => {
	res.send({ success: true, data: { msg: 'oh, hi' }});
});

router.use('/authors', require('./authors'));
router.use('/books', require('./books'));
router.use('/profile', auth.basic , require('./profile'));

// register a new user
router.post('/register', userValidationRules.createRules, registerController.register);

module.exports = router;
