const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function traverseReverse(node) {
    if(!node) return;
    traverseReverse(node.right);
    console.log(node.val);
    traverseReverse(node.left);
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);

traverseReverse(tree.root);