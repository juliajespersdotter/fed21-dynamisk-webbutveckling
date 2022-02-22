/**
 * Author Validation Rules
 */

 const { body } = require('express-validator');

 const createRules = [
     body('title').exists().isLength( { min: 2 }),
     body('isbn').exists().isLength({ min: 2 }),
     body('pages').exists().isLength({ min: 1 }),
     body('author_id').exists().isLength({ min: 1 }),
 ];
 
 // allow only password, first_name, last_name to be updated, only optionally
 const updateRules = [
     body('title').optional().isLength({ min: 2 }),
     body('isbn').optional().isLength({ min: 2 }),
     body('pages').optional().isLength({ min: 1 }),
     body('author_id').optional().isLength({ min: 1 }),
 ];
 
 module.exports = {
     createRules,
     updateRules
 }