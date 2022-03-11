/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

let io = null; // socket.io server instance

// list of socket-ids and their username
const users = {}

// handle when user has disconnected from chat
const handleDisconnect = function() {
	debug(`Client ${this.id} disconnected :(`);

	// let everyone know that user has disconnected
	this.broadcast.emit('user:disconnected', users[this.id]);

	// remove user from list of connected users
	delete users[this.id];
}

// handle when user has joined the chat
const handleUserJoined = function(username, callback) {
	// associate socket id with username
	users[this.id] = username;

	this.broadcast.emit('user:connected', username);

	// confirm join
	callback({
		success : true,
	});
}

// handle when user has sent a message
const handleChatMessage = function(message) {
	debug('Someone said something: ', message);

	// emit `chat:message` event to everyone EXCEPT the sender
	this.broadcast.emit('chat:message', message);
}


module.exports = function(socket, _io) {
	io = _io;

	debug('a new client has connected', socket.id);

	_io.emit("new-connection", "A new user connected");

	// broadcast that a new user has connected
	socket.broadcast.emit('user:connected');

	// handle user disconnect
	socket.on('disconnect', handleDisconnect);

	// handle user joined
	socket.on('user:joined', handleUserJoined)

	// handle user emitting a new message
	socket.on('chat:message', handleChatMessage);
}
