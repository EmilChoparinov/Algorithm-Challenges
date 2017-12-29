const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function leftSideBinary(node, values = [], isRoot = true) {
    if (!node) {
        return;
    }
    if (isRoot) {
        isRoot = false;
        leftSideBinary(node.left, values, isRoot);
        if (node.left) values.push(node.left.val);
        values.push(node.val);
    } else {
        leftSideBinary(node.left, values, isRoot);
        if (node.left) values.push(node.left.val);
        leftSideBinary(node.right, values, isRoot);
    }
    return values;
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
console.log(leftSideBinary(tree.root));