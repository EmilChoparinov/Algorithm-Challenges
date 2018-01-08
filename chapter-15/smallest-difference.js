var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

function smallestDifference(node) {
    let prev, min = Number.MAX_VALUE;
    let recurse = function (node) {
        if (!node) return;
        recurse(node.left);
        if (prev) {
            min = Math.min(min, node.val - prev);
        }
        prev = node.val;
        recurse(node.right);
    };
    recurse(node);
    return min;
}

let tree = new BST();
tree.add(50).add(17).add(76).add(9).add(23).add(54).add(14).add(19)
    .add(72).add(12).add(67);

console.log(smallestDifference(tree.root));
console.log(tree.toString());