let reference = require("../chapter-11/reference-class");
let BST = reference.BST;
let BTNode = reference.BTNode;
function isFull(node) {
    if (!node) return true;
    if (!node.left && !node.right) return true;
    if (node.left && node.right) return isFull(node.left) && isFull(node.right);
    return false;
}

let fullTree = new BST();
fullTree.add(40).add(35).add(50).add(25).add(37);

console.log(isFull(fullTree.root));