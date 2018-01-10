var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

function partitionTree(tree, val) {
    if (tree instanceof BST && typeof val == 'number') {
        let recurse = function (node, val, tree1 = new BST(), tree2 = new BST()) {
            if (!node) return;
            recurse(node.left, val, tree1, tree2);
            if (node.val > val) tree1.add(node.val);
            else tree2.add(node.val);
            recurse(node.right, val, tree1, tree2);
            return { set: tree1, get: tree2 };
        };
        let t = recurse(tree.root, val);
        tree.root = t.set.root;
        return t.get;
    }
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
let part = partitionTree(tree, 48);
console.log(tree.toString(), part.toString());