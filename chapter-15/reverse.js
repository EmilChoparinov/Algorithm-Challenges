var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

function reverse(node) {
    if (!node) return;
    let t = node.left;
    node.left = node.right;
    node.right = t;
    reverse(node.left);
    reverse(node.right);
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
console.log(tree.toString());
reverse(tree.root);
console.log(tree.toString());