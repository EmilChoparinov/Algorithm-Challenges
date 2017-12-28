const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

/**
 * finds out of tree is balanced or not
 * @param {BST} tree tree to traverse
 * @param {BTNode} node node to start
 * @returns {Boolean}
 */
function isBalanced(tree, node = tree.root) {
    if (tree instanceof BST) {
        if (!node) return true;
        let lHeight = tree.height(node.left);
        let rHeight = tree.height(node.right);
        if(Math.abs(lHeight - rHeight) <= 1 && isBalanced(tree, node.left) && isBalanced(tree, node.right)) return true;
        return false;
    }
}

let tree = new BST();
// tree.add(60).add(41).add(74).add(16).add(53).add(65);
// tree.add(25).add(48).add(55).add(63).add(70);
// tree.add(42).add(62).add(64);
tree.add(5).add(3).add(7).add(2).add(4).add(6).add(8);
console.log(isBalanced(tree));