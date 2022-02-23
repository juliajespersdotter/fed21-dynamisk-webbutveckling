/**
 * User Controller
 */

const debug = require('debug')('books:profile_controller');
const models = require('../models');
const {matchedData, validationResult} = require('express-validator');

/**
 * Get authenticated user's profile
 *
 * GET /
 */
const getProfile = async (req, res) => {
	res.send({
		status: 'success',
		data: {
			user: req.user,
		}
	});
}

/**
 * Update authenticated user's profile
 *
 * PUT /
 */
const updateProfile = async (req, res) => {
	res.status(405).send({
		status: 'error',
		message: 'This is a workshop'
	});
	
}

const getBooks = async (req, res) => {
	// somehow get the authenticated user's books
	// and return it

	res.status(405).send({
		status: 'error',
		message: 'This is a workshop'
	});
}


module.exports = {
	getProfile,
	updateProfile,
	getBooks
}
