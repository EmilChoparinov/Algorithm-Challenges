const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function traversePreOrder(root) {
    if (root instanceof BTNode) {
        if (!root) return;
        console.log(root.val);
        traversePreOrder(root.left);
        traversePreOrder(root.right);
    }
}

let tree = new BST();
tree.add(60).add(41).add(74).add(18).add(53).add(65);
tree.add(25).add(48).add(55).add(63).add(70);
tree.add(42).add(62).add(64);
traversePreOrder(tree.root)