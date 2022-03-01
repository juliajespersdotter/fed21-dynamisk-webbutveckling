/**
 * User Controller
 */

const debug = require('debug')('books:profile_controller');
const models = require('../models');
const {matchedData, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

/**
 * Get authenticated user's profile
 *
 * GET /
 */
const getProfile = async (req, res) => {
	/**
	 * req.user is now a simple object with the payload
	 *	@todo query database for a user with the id `req.user.user_id`
	 *  @todo and return the result
	 */

	 try {
		 // create function fetchById()
		 const user = await models.User.fetchById(req.user.user_id);
		 res.send({
			status: 'success',
			data: {
				user: user,
			}
		});
	 } catch (error) {
		return res.status(404).send;
	 }

	
}

/**
 * Update authenticated user's profile
 *
 * PUT /
 */
const updateProfile = async (req, res) => {
	// Checking after errors before updating user
	const user = await models.User.fetchById(req.user.user_id);

	const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).send({ status : "fail", data: errors.array() });
    }
    const validData = matchedData(req); 

	try {
		validData.password = await bcrypt.hash(validData.password, models.User.hashSaltRounds);
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown when hashing new password',
		});
	}

	try {
		const updatedUser = await user.save(validData);
		debug("Updated user successfully: %O", updatedUser);
		res.send({
			status: 'success',
			data: {
				user: updatedUser,
			},
		});
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when updating a new user.',
		});
		throw error;
	}
}
	

const getBooks = async (req, res) => {
	// get user and also eager-load the books-relation
	// const user = await new models.User({ id: req.user.id }).fetch({withRelated: ['books']});

	/**
	 * req.user is now a simple object with the payload
	 *	@todo query database for a user with the id `req.user.user_id`
	 *  @todo and get their books
	 */

	const user = await models.User.fetchById(req.user.user_id);

	// "lazy load" the books-relation
	await user.load('books');

		res.status(200).send({
			status: 'success',
			data: {
				books: user.related('books'),
			}
		});
}

const addBook = async (req, res) => {
	// Checking after errors before adding book
	const user = await models.User.fetchById(req.user.user_id);

	const errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(422).send({ status : "fail", data: errors.array() });
	}

	const validData = matchedData(req); 

	// lazy-load book relationship
	await user.load('books');

	// get the user's books
	const books = user.related('books');

	// how to check if book is already in list
	/* let already_exists = false;
	books.forEach(book => {
		if (book.id == validData.book_id){
			already_exists = true;
		}
	});
	*/

	const  existing_book = books.find(book => book.id == validData.book_id)

	// if the book exists, bail
	if (existing_book) {
		return res.send({
			status: 'fail',
			data: "Book already exists",
		});
	}

	try {
		const result = await user.books().attach(validData.book_id);

		if(result === books){
			debug("Cannot add book already in list.")
		}
		debug("Added book successfully: %O", res);
		res.send({
			status: 'success',
			data: {
				result: result,
			},
		});
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: "Exception thrown when attempting to add book",
		});
		throw error;
	}
}


module.exports = {
	getProfile,
	updateProfile,
	getBooks,
	addBook
}
