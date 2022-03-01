/**
 * Authentication Middleware
 */

const debug = require('debug')('books:auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

/**
 * HTTP Basic Authentication
 */

const basic = async (req, res, next) => {
    debug("Hello from auth.basic!");

    // make sure authorization header exists, otherwise fail
    if(!req.headers.authorization){
        debug('Authorization header missing');

        return res.status(401).send({
            status: 'fail',
            data: 'Authorization required',
        });
    }

    // %o -> placeholder, replaced by next parameter
    debug('Authorization header: %o', req.headers.authorization);

    // split header into "<authSchema> <base64Payload>"
    // creates an array with two parts
    const [authSchema, base64Payload] = req.headers.authorization.split(' ');

    // if authSchema isn't "Basic" then bail
    if(authSchema.toLowerCase() !=='basic'){
        // not ours to authenticate
        debug("Authorization schema isn't basic");

        return res.status(401).send({
            status: 'fail',
            data: 'Authorization required',
        });
    } 

    // decode payload from base64 => ascii
    const decodedPayload = Buffer.from(base64Payload, 'base64').toString('ascii');
    // decodedPayload = "username:password"
    
    // split decoded payload into "<username>:<password>"
    const [username, password] = decodedPayload.split(':');
    console.log(username, password);


    const user = await User.login(username, password);
    if (!user) {
        return res.status(401).send({
            status: 'fail',
            data: 'Authorization failed',
        });
    }

    // finally, attach user to request
    req.user = user;

    // pass request along
    next();
}

/**
 * Validate JWT token
 */

const validateJwtToken = (req, res, next) => {
     // make sure authorization header exists, otherwise fail
     if(!req.headers.authorization){
        debug('Authorization header missing');

        return res.status(401).send({
            status: 'fail',
            data: 'Authorization required',
        });
    }

    // Authorization: "Bearer xxxxxx.xxxxx.xxxx"
    // split authorization header into "authSchema token"
    const [authSchema, token] = req.headers.authorization.split(' ');
    if(authSchema.toLowerCase() !== "bearer") {
        // not ours to authenticate
        debug("Authorization schema isn't bearer");

        return res.status(401).send({
            status: 'fail',
            data: 'Authorization required',
        });
    }

    // verify token (and extract payload)
    try {
        req.user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
            return res.status(401).send({
                status: 'fail',
                data: 'Authorization required',
            });
    }

    // ??!

    // pass request along
    next();
}

module.exports = {
    basic,
    validateJwtToken
}