let referenceQueue = require("../chapter-6/linked-list-queue/base-class");
let Queue = referenceQueue.Queue;

class QueueFromStacks {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(val) {
        this.queue2.enqueue(val);
        while (this.queue1.head) this.queue2.enqueue(this.queue1.dequeue().val);
        while (this.queue2.head) this.queue1.enqueue(this.queue2.dequeue().val);
        return this;
    }

    pop() {
        return this.queue1.dequeue();
    }

    toString() {
        return this.queue1.toString();
    }
}

let stack = new QueueFromStacks();
stack.push(4).push(3).push(10);
console.log(stack.toString());
console.log(stack.pop().val);
stack.push(5);
stack.push(100);
stack.pop();
console.log(stack.toString());