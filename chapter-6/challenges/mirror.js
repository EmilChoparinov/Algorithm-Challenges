const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

function mirror(stack){
    if(stack instanceof SLStack){
        let queue = new SLQueue();
        while(stack.head) queue.enqueue(stack.pop().val);
        while(queue.head) stack.push(queue.dequeue().val);
        while(stack.head) queue.enqueue(stack.pop().val);
        for(let i = 0; i < queue.size(); i++){
            let val = queue.dequeue().val;
            stack.push(val);
            queue.enqueue(val);
        }
        while(stack.head) queue.enqueue(stack.pop().val);
        while(queue.head) stack.push(queue.dequeue().val);
    }
}

var stack = new SLStack();
stack.push(1).push(3).push(5).push(7);
mirror(stack);
console.log(stack.toString());