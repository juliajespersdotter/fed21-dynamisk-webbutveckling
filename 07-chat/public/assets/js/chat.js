const messagesEl = document.querySelector('#messages'); // ul element containing all messages 
const messageForm = document.querySelector('#message-form');
const messageEl = document.querySelector('#message');

const socket = io();

const addMessageToChat = message => {
	const liEl = document.createElement('li');
	liEl.innerText = message;

	// set class of `li` to `message`
	liEl.classList.add('message');

	// append `li`element to `#messages`
	messagesEl.appendChild(liEl);

	//scroll `li` element into view
	liEl.scrollIntoView();
}

const addNoticeToChat = notice => {
	const liEl = document.createElement('li');
	liEl.innerText = notice;
	liEl.classList.add('notice');
	messagesEl.appendChild(liEl);
	liEl.scrollIntoView();
}

// listen for new user connected
socket.on('user:connected', () => {
	addNoticeToChat(`Someone connected`);
})

// listen for user disconnected
socket.on('user:disconnected', () => {
	addNoticeToChat("Someone disconnected");
})

// listen for incoming messages
socket.on('chat:message', message => {
	console.log("Someone said something", message);

	addMessageToChat(message);
})

messageForm.addEventListener('submit', e => {
	e.preventDefault();

	console.log("Someone submitted something:", messageEl.value);
	if (!messageEl.value) {
		return;
	}

	// send message to server
	socket.emit('chat:message', messageEl.value);

	addMessageToChat(messageEl.value);

	// clear message input element
	messageEl.value = '';
	messageEl.focus();

});