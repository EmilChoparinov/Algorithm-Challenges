const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

function switchPairs(stack){
    if(stack instanceof SLStack){
        let queue = new SLQueue();
        while(stack.head){
            let curVal = stack.pop().val;
            if(!stack.head){
                queue.enqueue(curVal);
            }else{
                let nextVal = stack.pop().val;
                queue.enqueue(nextVal);
                queue.enqueue(curVal);
            }
        }
        while(queue.head) stack.push(queue.dequeue().val);
        while(stack.head) queue.enqueue(stack.pop().val);
        while(queue.head) stack.push(queue.dequeue().val);
        console.log(stack.toString());
    }
}

var stack = new SLStack();
stack.push(1).push(2).push(3).push(4).push(5).push(6).push(7)
console.log(stack.toString());
switchPairs(stack);