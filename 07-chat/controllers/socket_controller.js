/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

let io = null; // socket.io server instance
let socket = null; // socket to the client

// list of socket-ids and their username
const users = {}

// handle when user has disconnected from chat
const handleDisconnect = function() {
	debug(`Client ${socket.id} disconnected :(`);

	// let everyone know that user has disconnected
	socket.broadcast.emit('user:disconnected', users[socket.id]);

	// remove user from list of connected users
	delete users[socket.id];
}

// handle when user has joined the chat
const handleUserJoined = function(username, callback) {
	// associate socket id with username
	users[socket.id] = username;

	socket.broadcast.emit('user:connected', username);

	// confirm join
	callback({
		success : true,
	});
}

// handle when user has sent a message
const handleChatMessage = function(message) {
	debug('Someone said something: ', message);

	// emit `chat:message` event to everyone EXCEPT the sender
	socket.broadcast.emit('chat:message', message);
}


module.exports = function(_socket, _io) {
	io = _io;
	socket = _socket;

	debug('a new client has connected', _socket.id);

	_io.emit("new-connection", "A new user connected");

	// broadcast that a new user has connected
	_socket.broadcast.emit('user:connected');

	// handle user disconnect
	_socket.on('disconnect', handleDisconnect);

	// handle user joined
	_socket.on('user:joined', handleUserJoined)

	// handle user emitting a new message
	_socket.on('chat:message', handleChatMessage);
}
