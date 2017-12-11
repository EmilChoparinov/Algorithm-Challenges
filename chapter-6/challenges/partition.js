const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

/**
 * Move all negatives to the end, without maintaining original order
 * @param {SLStack} stack 
 */
function partition(stack) {
    if (stack instanceof SLStack) {
        let queue = new SLQueue();
        while (stack.head) queue.enqueue(stack.pop().val);
        let hasNegatives = true;
        while (hasNegatives) {
            hasNegatives = true;
            for (let i = 0; i < queue.size(); i++) {
                let val = queue.dequeue().val;
                if (val < 0) stack.push(val);
                else {
                    hasNegatives = false;
                    queue.enqueue(val);
                }
            }
        }
        console.log(queue.toString(), stack.toString());
        while(stack.head) queue.enqueue(stack.pop().val);
        while(queue.head) stack.push(queue.dequeue().val);
    }
}

var stack = new SLStack();
stack.push(10).push(-20).push(30).push(40).push(-40);
console.log(stack.toString());
partition(stack);
console.log(stack.toString());