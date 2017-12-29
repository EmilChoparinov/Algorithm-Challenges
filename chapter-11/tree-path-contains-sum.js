const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function treePathsContainingSum(node, sum, curSum = 0, curPath = [], availablePaths = []) {
    if (!node) {
        if (sum == curSum) {
            availablePaths.push(curPath);
            return true;
        }
        return false;
    }
    curPath.push(node.val);
    curSum += node.val;
    let t = treePathsContainingSum(node.left, sum, curSum, curPath.slice(0), availablePaths);
    if (!t || t instanceof Array) treePathsContainingSum(node.right, sum, curSum, curPath.slice(0), availablePaths);
    return availablePaths;
}

let tree = new BST();
tree.add(5).add(3).add(1).add(4).add(7);
console.log(treePathsContainingSum(tree.root, 12));