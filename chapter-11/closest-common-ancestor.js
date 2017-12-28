const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

/**
 * finds closest ancestor of a pair of nodes
 * @param {BST} tree 
 * @param {Any} val1 item 1
 * @param {Any} val2 item 2
 * @param {BTNode} node node start
 */
function closestCommonAncestor(val1, val2, node) {
    if (tree instanceof BST) {
        if (!node) return null;
        if (val1 < node.val && val2 < node.val) {
            return closestCommonAncestor(val1, val2, node.left);
        }
        if (val1 > node.val && val2 > node.val) {
            return closestCommonAncestor(val1, val2, node.right);
        }
        return node;
    }
}

let tree = new BST();
tree.add(60).add(41).add(74).add(18).add(53).add(65);
tree.add(25).add(48).add(55).add(63).add(70);
tree.add(42).add(62).add(64);

console.log(closestCommonAncestor(46, 18, tree.root));