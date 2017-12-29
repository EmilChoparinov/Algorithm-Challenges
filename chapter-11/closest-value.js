const reference = require("./reference-class");
var BST = reference.BST;
var BTNode = reference.BTNode;

function closestValue(node, val) {
    if (node instanceof BTNode) {
        let closest = node.val;
        while (node) {
            if (node.val == val) {
                return node.val;
            } else {
                if (Math.abs(val - closest) >= Math.abs(val - node.val)) {
                    closest = node.val;
                }
                if (val < node.val) {
                    if (node.left) {
                        node = node.left;
                    } else {
                        return closest;
                    }
                }
                else {
                    if (node.right) {
                        node = node.right;
                    } else {
                        return closest;
                    }
                }
            }
        }
    }
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
console.log(closestValue(tree.root, 22));