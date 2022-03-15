/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

let io = null; // socket.io server instance

// list of rooms and their users
const users = {};
const rooms = [
	{
		id: 'general',
		name: 'General',
		users: {},
	},
	{
		id: 'major',
		name: 'Major',
		users: {},
	},
	{
		id: 'sergeant',
		name: 'Sergeant',
		users: {},
	},
]


// handle when user has disconnected from chat
const handleDisconnect = function() {
	debug(`Client ${this.id} disconnected :(`);

	// find the room that this socket is part of
	const room = rooms.find(chatroom => chatroom.users.hasOwnProperty(this.id));
	
	// if socket was not in a room, don't broadcast disconnect
	if(!room) {
		return;
	}

	// let everyone in the room know that user has disconnected
	this.broadcast.to(room.id).emit('user:disconnected', room.users[this.id]);

	// remove user from list of connected users in that room
	delete room.users[this.id];

	// broadcast list of users in room to all connected sockets EXCEPT ourselves
	this.broadcast.to(room.id).emit('user:list', room.users);
}

// handle when user has joined the chat
const handleUserJoined = function(username, room_id , callback) {
	debug(`User ${username} with socket id ${this.id} wants to join room '${room_id}'`);

	// join room
	this.join(room_id);

	// add socket to list of online users in this room
	// a) find room object with `id` === `room`
	const room = rooms.find(chatroom => chatroom.id === room_id);

	// b) add socket to room's `users` object
	room.users[this.id] = username;

	// broadcast only to those in the same room
	this.broadcast.to(room).emit('user:connected', username);

	// confirm join
	callback({
		success : true,
		roomName: room.name,
		users: room.users
	});

	// broadcast list of users in room to all connected sockets EXCEPT ourselves
	this.broadcast.to(room.id).emit('user:list', room.users);
}

// handle when user has sent a message
const handleChatMessage = function(message) {
	debug('Someone said something: ', message);

	// store message in `messages` collection

	// emit `chat:message` event to everyone EXCEPT the sender
	this.broadcast.to(message.room).emit('chat:message', message);
}


module.exports = function(socket, _io) {
	io = _io;

	debug('a new client has connected', socket.id);

	_io.emit("new-connection", "A new user connected");

	// handle user disconnect
	socket.on('disconnect', handleDisconnect);

	// handle user joined
	socket.on('user:joined', handleUserJoined);

	// handle user emitting a new message
	socket.on('chat:message', handleChatMessage);
}
