var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

//different and less efficient solution than the one proposed in chapter
//11. This one will be O(n) regardless while the one in chapter 11 takes
//advantage of the data structure and does it in log scale time
function getClosestValue(node, n) {
    if (node instanceof BTNode) {
        let closest = node.val;
        let recurse = function (node) {
            if (!node) return;
            recurse(node.left);
            if (Math.abs(n - node.val) < Math.abs(n - closest)) {
                closest = node.val;
            }
            recurse(node.right);
        };
        recurse(node);
        return closest;
    }
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
console.log(getClosestValue(tree.root, 12));