const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

/**
 * checks if SLStack is sorted
 * @param {SLStack} stack 
 */
function isSorted(stack) {
    if (stack instanceof SLStack) {
        let stack2 = new SLStack();
        if (!stack.isEmpty()) {
            stack2.push(stack.pop().val);
            let inOrder = true;
            while (stack.head) {
                let val = stack.pop().val;
                if (val < stack2.top()) {
                    stack2.push(val);
                    inOrder = false;
                    break;
                }
                stack2.push(val);
            }
            while (stack2.head) {
                stack.push(stack2.pop().val);
            }
            return inOrder;
        }
    }
}

var stack = new SLStack();
stack.push(7).push(6).push(-4).push(3).push(1);
console.log(stack.toString());
console.log(isSorted(stack));
console.log(stack.toString());