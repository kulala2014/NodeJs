var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connected successfully~');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
    console.log('received data successfully');
});

eventEmitter.emit('connection');

console.log('end~');