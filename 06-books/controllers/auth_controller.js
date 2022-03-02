/**
 * Auth Controller
 */

const debug = require('debug')('books:auth_controller');
const models = require('../models');
const {matchedData, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

/** 
 * Login a user, sign a JWT token and return it
 * 
 * POST /login
 *
 * {
 * "username": "",
 * "password": ""
 * }
 */

const login = async (req, res) => {
    // destructure username and password from request body
    const { username, password } = req.body;

    // login the user
    const user = await models.User.login(username, password);
    if(!user) {
        return res.status(401).send({
            status: "fail",
            data: 'Authentication failed.',
        });
    }

    // construct jwt payload
    const payload = {
        sub: user.get('username'),
        user_id: user.get('id'),
        name: user.get('first_name') + '.' + user.get('last_name'),    
    }

    // sign payload and get access-token, choose when access token expires
    var access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'});

    // respond with the access-token 
    return res.send({
        status: 'success',
        data: {
            // here be `access_token`
            access_token,
        }
    })

}


/**
 * Register a new user
 * 
 * POST /register
 */

const register = async (req, res) => {
    // check for validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).send({ status : "fail", data: errors.array() });
    }

    // get only the valid data from the request
    const validData = matchedData(req); 

    // Replace the password with a hashed password
    try {
        validData.password = await bcrypt.hash(validData.password, models.User.hashSaltRounds);
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Exception thrown when hashing the password.',
        });
    }

    try {
        const user = await new models.User(validData).save();
        debug("Created new user successfully: %O", user);

        res.send({
            status: 'success',
            data: {
                user,
            },
        });

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Exception thrown in database when creating a new user.',
        });
        throw error;
    }
}

module.exports = {
    register,
    login
}
