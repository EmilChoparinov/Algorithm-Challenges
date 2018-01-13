var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

function kthLargest(node, k, pointers = { counter: 0, value: undefined }) {
    if (!node) return;
    kthLargest(node.right, k, pointers, pointers);
    pointers.counter++;
    if (pointers.counter == k) {
        pointers.value = node;
    }
    kthLargest(node.left, k, pointers, pointers);
    return pointers.value;
}

let tree = new BST();
tree.add(60).add(41).add(18).add(25).add(53).add(48).add(42).add(55);
tree.add(74).add(85).add(63).add(62).add(64).add(70);
console.log(tree.toString());
console.log(kthLargest(tree.root, 5));