const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function nodeBefore(node, val) {
    if (!node) return null;
    //special case q is for if the traversal never reached going left
    let q = nodeBefore(node.right, val);
    if (q) return q;
    if (node.val < val) return node;
    else return nodeBefore(node.left, val);
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
console.log(nodeBefore(tree.root, 22));