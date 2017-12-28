const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function traversePostOrder(root) {
    if (root instanceof BTNode) {
        if (!root) return;
        traversePostOrder(root.left);
        traversePostOrder(root.right);
        console.log(root.val);
    }
}

let tree = new BST();
tree.add(60).add(41).add(74).add(18).add(53).add(65);
tree.add(25).add(48).add(55).add(63).add(70);
tree.add(42).add(62).add(64);
traversePostOrder(tree.root)