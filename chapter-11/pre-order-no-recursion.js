const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

let stackReference = require("../chapter-6/linked-list-stack/base-class");
let Stack = stackReference.SLStack;

function preOrderNoRecursion(tree) {
    if (tree instanceof BST) {
        let unfinishedNodes = new Stack();
        unfinishedNodes.push(tree.root);
        while (unfinishedNodes.head) {
            let node = unfinishedNodes.pop();
            if (node.right) unfinishedNodes.push(node.right);
            if (node.left) unfinishedNodes.push(node.left);
            console.log(node.val);
        }
    }
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
preOrderNoRecursion(tree);