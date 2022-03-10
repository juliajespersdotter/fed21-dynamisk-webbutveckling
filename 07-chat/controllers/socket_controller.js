/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

// list of socket-ids and their username
const users = {}

module.exports = function(socket) {
	debug('a new client has connected', socket.id);

	// broadcast that a new user has connected
	socket.broadcast.emit('user:connected');

	// handle user disconnect
	socket.on('disconnect', function() {
		debug(`Client ${this.id} disconnected :(`);

		this.broadcast.emit('user:disconnected', users[socket.id]);

		// remove user from list of connected users
		delete users[socket.id];
	});

	// hande user joined
	socket.on('user:joined', function(username, callback) {
		// associate socket id with username
		users[socket.id] = username;

		socket.broadcast.emit('user:connected', username);

		// confirm join
		callback({
			success : true,
		});
	})

	// handle user emitting a new message
	socket.on('chat:message', function(message) {
		debug('Someone said something: ', message);

		// emit `chat:message` event to everyone EXCEPT the sender
		this.broadcast.emit('chat:message', message);
	});
}
