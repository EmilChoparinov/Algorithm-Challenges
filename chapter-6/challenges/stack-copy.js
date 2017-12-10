const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

function Copy(stack) {
    if (stack instanceof SLStack) {
        let queue = new SLQueue();
        let cStack = new SLStack();
        let pointer = stack.head;
        while (pointer) {
            queue.enqueue(pointer.val);
            pointer = pointer.next;
        }
        while (queue.head) {
            cStack.push(queue.dequeue().val);
        }
        return cStack;
    }
}

let stack = new SLStack();
stack.push(1).push(2).push(3).push(4);
console.log(stack.toString());
let cStack = Copy(stack);
console.log(cStack.toString());