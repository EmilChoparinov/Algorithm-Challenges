const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function addWithoutDupes(val, node) {
    if (!node) return false;
    if (node.val == val) return false;
    if (val < node.val) {
        if (node.left) {
            return addWithoutDupes(val, node.left);
        } else {
            node.left = new BTNode(val);
            return true;
        }
    } else {
        if (node.right) {
            return addWithoutDupes(val, node.right);
        } else {
            node.right = new BTNode(val);
            return true;
        }
    }
}


let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);

console.log(addWithoutDupes(41, tree.root));
console.log(addWithoutDupes(15, tree.root));
tree.printVals();