const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

/**
 * Reorded the queue in absolute order
 * @param {SLQueue} queue 
 */
function reorderQueue(queue) {
    if (queue instanceof SLQueue) {
        let stack = new SLStack();
        let switchedNum = false;
        while (!switchedNum) {
            stack.push(queue.dequeue().val);
            while (queue.head) {
                let val = queue.dequeue().val;
                if (stack.top() < val) {
                    stack.push(val);
                } else {
                    let stackVal = stack.pop().val;
                    switchedNum = true;
                    stack.push(val);
                    stack.push(stackVal);
                }
            }
            while (stack.head) {
                queue.enqueue(stack.pop().val);
            }
            stack.push(queue.dequeue().val);
            while (queue.head) {
                let val = queue.dequeue().val;
                if (stack.top() > val) {
                    stack.push(val);
                } else {
                    switchedNum = true;
                    let stackVal = stack.pop().val;
                    stack.push(val);
                    stack.push(stackVal);
                }
            }
            while (stack.head) {
                queue.enqueue(stack.pop().val);
            }
            if (switchedNum) switchedNum = false;
            else switchedNum = true;
        }
        console.log(queue.toString());
    }
}

var queue = new SLQueue();
queue.enqueue(10).enqueue(-20).enqueue(30).enqueue(-40).enqueue(-30).enqueue(-5);
// console.log(queue.toString());
reorderQueue(queue);