const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

/**
 * checks if tree's values are properly placed
 * @param {BTNode} node node to start check
 */
function isValid(node) {
    if (node.left && node.right) {
        if (node.val > node.left.val && node.val < node.right.val) {
            let left = isValid(node.left);
            let right = isValid(node.right);
            if (right && left) return true;
            return false;
        } else {
            return false;
        }
    }
    else if (node.left) {
        if (node.val > node.left.val) {
            return isValid(node.left);
        } else {
            return false;
        }
    }
    else if (node.right) {
        if (node.val < node.right.val) {
            return isValid(node.right);
        } else {
            return false;
        }
    } else {
        return true;
    }
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);

console.log(isValid(tree.root));