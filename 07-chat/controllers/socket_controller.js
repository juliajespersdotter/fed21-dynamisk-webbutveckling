/**
 * Socket controller
 */

const debug = require('debug')('chat:socket_controller');



module.exports = function(socket) {
	debug('a new client has connected', socket.id);

	socket.on('disconnect', function() {
        debug(`Client ${this.id} disconnected :(`);
    });

    // listening to event chat:message from chat.js
    socket.on('chat:message', function(message) {
        debug('Someone said something:', message);

        // emit `chat:message` event to everyone EXCEPT the sender
        this.broadcast.emit('chat:message', message);
    });
}