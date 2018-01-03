const reference = require("./priority-queue");
var PriQueue = reference.PriQueue;
var Node = reference.Node;

class Sequencer {
    constructor() {
        this.queue = new PriQueue();
    }

    sequenceMessage(time, message) {
        this.queue.enqueue(message, time);
    }

    playMessage() {
        console.log(this.queue.dequeue().val);
    }
}

let sequencer = new Sequencer();
sequencer.sequenceMessage(2000000000000, "Msg 4");
sequencer.sequenceMessage(1453506544890, "Msg 2");
sequencer.sequenceMessage(1453506544900, "Msg 3");
sequencer.sequenceMessage(1000000000000, "Msg 1");

sequencer.playMessage();
sequencer.playMessage();