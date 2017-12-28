const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

/**
 * adds an array of sorted items to a tree with balance in mind
 * @param {Array} arr array of sorted items
 * @param {BST} tree tree to put values in
 */
function arrayToBST(arr, tree = new BST()) {
    if (arr instanceof Array) {
        if (arr.length == 0) return;
        tree.add(arr[Math.floor(arr.length / 2)]);
        arrayToBST(arr.slice(0, arr.length / 2), tree);
        arrayToBST(arr.slice(arr.length / 2 + 1, arr.length), tree);
        return tree;
    }
}

//just to check
function isBalanced(tree, node = tree.root) {
    if (tree instanceof BST) {
        if (!node) return true;
        let lHeight = tree.height(node.left);
        let rHeight = tree.height(node.right);
        if (Math.abs(lHeight - rHeight) <= 1 && isBalanced(tree, node.left) && isBalanced(tree, node.right)) return true;
        return false;
    }
}

let arr = [2, 3, 4, 5, 6, 7, 8];
let genTree = arrayToBST(arr);
console.log(JSON.stringify(genTree, null, 4));
console.log(isBalanced(genTree));