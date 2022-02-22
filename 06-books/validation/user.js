/**
 * User Validation Rules
 */

const { body, matchedData, validationResult } = require('express-validator');

const createRules = [
    body('username').exists().isLength( { min: 3 }),
    body('password').exists().isLength({ min: 4 }),
    body('first_name').exists().isLength({ min: 2 }),
    body('last_name').exists().isLength({ min: 2 }),
];

const updateRules = [

];

module.exports = {
    createRules,
    updateRules
}