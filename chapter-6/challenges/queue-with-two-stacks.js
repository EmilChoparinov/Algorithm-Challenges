const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;

class QueueWithStacks {
    constructor() {
        this.stack1 = new SLStack();
        this.stack2 = new SLStack();
    }

    /**
     * Adds a value to the queue
     * @param {Any} val 
     */
    enqueue(val) {
        while (this.stack1.head) {
            this.stack2.push(this.stack1.pop().val);
        }
        this.stack2.push(val);
        while (this.stack2.head) {
            this.stack1.push(this.stack2.pop().val);
        }
        return this;
    }

    /**
     * Removes the next item queued in the queue
     */
    dequeue(){
        return this.stack1.pop().val;
    }

    toString() {
        let node = this.stack1.head;
        let s = "[ ";
        while (node) {
            if (!node.next) break;
            s += node.val + ", ";
            node = node.next;
        }
        if (node) {
            s += node.val;
        }
        s += " ]";
        return s;
    }
}

var queue = new QueueWithStacks();
queue.enqueue(1);
console.log(queue.toString());
queue.enqueue(2);
console.log(queue.toString());
queue.enqueue(3);
console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.toString());