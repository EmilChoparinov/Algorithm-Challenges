const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function sumOfRootLeafNumbers(node, curSum = 0, sums = []) {
    if (!node) {
        return sums.push(curSum);
    }
    curSum += node.val;
    sumOfRootLeafNumbers(node.left, curSum, sums);
    if (node.right) {
        sumOfRootLeafNumbers(node.right, curSum, sums);
    }
    return sums;
}

let tree = new BST();
tree.add(5).add(3).add(1).add(4).add(7);
console.log(sumOfRootLeafNumbers(tree.root));