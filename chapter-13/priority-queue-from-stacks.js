let referenceQueue = require("../chapter-6/linked-list-stack/base-class");
let Stack = referenceQueue.SLStack;

class PriorityItem {
    constructor(value, item) {
        this.val = value;
        this.item = item;
    }
    toString() {
        return `(${this.val}, ${this.item})`
    }
}

class PriorityQueueStack {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value, item) {
        let p = new PriorityItem(value, item);
        let beforeItem = this.stack1.pop();
        if (beforeItem) {
            while (beforeItem && beforeItem.val < value) {
                this.stack2.push(beforeItem);
                beforeItem = this.stack1.pop();
            }
            this.stack2.push(p);
            while (this.stack1.head) this.stack2.push(this.stack1.pop());
        } else {
            this.stack2.push(p);
            while (this.stack1.head) this.stack2.push(this.stack1.pop());
        }
        while (this.stack2.head) this.stack1.push(this.stack2.pop());
        return this;
    }

    dequeue() {
        return this.stack1.pop();
    }

    toString() {
        return this.stack1.toString();
    }
}

let queue = new PriorityQueueStack();
queue.enqueue(3, 3).enqueue(9, 9).enqueue(5, 5).enqueue(10, 10);
console.log(queue.toString());
console.log(queue.dequeue().toString());
console.log(queue.toString());