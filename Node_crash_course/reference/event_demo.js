const EventEmitter = required(events);

//Create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', ()=> console.log('Event fired!'))

//Init event
myEmitter.emit('event');
