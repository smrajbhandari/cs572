const EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
        setInterval(() => {
            this.emit('boom');
        }, 1000);
    }
}

var newgym = new Gym();

newgym.on('boom',()=> console.log("Athlete is working out"));