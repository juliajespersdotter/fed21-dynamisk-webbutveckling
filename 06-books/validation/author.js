/**
 * Author Validation Rules
 */

 const { body } = require('express-validator');

 const createRules = [
     body('first_name').exists().isLength( { min: 2 }),
     body('last_name').exists().isLength({ min: 2 }),
     body('birthyear').exists().isLength({ min: 4 , max: 4 }),
 ];
 
 // allow only password, first_name, last_name to be updated, only optionally
 const updateRules = [
     body('first_name').optional().isLength({ min: 2 }),
     body('last_name').optional().isLength({ min: 2 }),
     body('birthyear').optional().isLength({ min: 4, max: 4 }),
 ];
 
 module.exports = {
     createRules,
     updateRules
 }