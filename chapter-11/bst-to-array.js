const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function BSTToArray(root, arr = []) {
    if (root instanceof BTNode) {
        if (!root) return;
        BSTToArray(root.left, arr);
        arr.push(root.val);
        BSTToArray(root.right, arr);
        return arr;
    }
}

let tree = new BST();
tree.add(60).add(41).add(74).add(18).add(53).add(65);
tree.add(25).add(48).add(55).add(63).add(70);
tree.add(42).add(62).add(64);
console.log(BSTToArray(tree.root));