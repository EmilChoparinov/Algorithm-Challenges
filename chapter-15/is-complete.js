let reference = require("../chapter-11/reference-class");
let BST = reference.BST;
let BTNode = reference.BTNode;
let reference2 = require("../chapter-6/linked-list-queue/base-class");
let Queue = reference2.Queue;

function isComplete(node) {
    if (node instanceof BTNode) {
        if (!node) return true;
        let queue = new Queue();
        let f = false;
        queue.enqueue(node);
        while (queue.head) {
            let cur = queue.dequeue().val;
            if (cur.left) {
                if (f) return false;
                queue.enqueue(cur.left);
            } else {
                f = true;
            }
            if (cur.right) {
                if (f) return false;
                queue.enqueue(cur.right);
            } else {
                f = true;
            }
        }
        return true;
    }
}

let completeTree = new BST();
completeTree.add(10).add(5).add(15).add(3).add(7).add(13);
console.log(isComplete(completeTree.root));