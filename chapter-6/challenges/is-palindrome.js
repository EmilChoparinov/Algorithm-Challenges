const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

function isPalindrome(queue){
    if(queue instanceof SLQueue){
        let stack = new SLStack();
        let pointer = queue.head;
        while(pointer){
            stack.push(pointer.val);
            pointer = pointer.next;
        }
        pointer = queue.head;
        while(stack.head){
            let val = stack.pop().val;
            if(val != pointer.val) return false;
            pointer = pointer.next;
        }
        return true;
    }
}

var queue = new SLQueue();
queue.enqueue("r").enqueue("a").enqueue("c").enqueue("e").enqueue("c").enqueue("a").enqueue("r");
console.log(isPalindrome(queue));