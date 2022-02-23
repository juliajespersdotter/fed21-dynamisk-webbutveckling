/**
 * User Validation Rules
 */

const { body } = require('express-validator');
const models = require('../models');

// allow only password, first_name, last_name to be updated, only optionally
// we dont want usernames to be changeable
const updateRules = [
    body('password').optional().isLength({ min: 4 }),
    body('first_name').optional().isLength({ min: 2 }),
    body('last_name').optional().isLength({ min: 2 }),
];

module.exports = {
    updateRules
}