const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

/**
 * removes the minumum of a stack and keeps it in order.
 * may only use 1 queue and has a O(4n) solution
 * @param {SLStack} stack 
 */
function removeMin(stack) {
    if (stack instanceof SLStack) {
        let queue = new SLQueue();
        let minVal = stack.top();
        //required twice because of queue -> stack flip behaviour
        for (let i = 0; i < 2; i++) {
            while (stack.head) {
                let val = stack.pop().val;
                if (minVal > val) minVal = val;
                queue.enqueue(val);
            }
            while (queue.head) {
                let val = queue.dequeue().val;
                if (val == minVal) continue;
                stack.push(val);
            }
        }
    }
}

var stack = new SLStack();
stack.push(1).push(-2).push(3).push(-6).push(4).push(8);
console.log(stack.toString());
removeMin(stack);
console.log(stack.toString());