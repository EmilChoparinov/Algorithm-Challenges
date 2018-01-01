let reference = require("../chapter-11/reference-class");
let BST = reference.BST;
let BTNode = reference.BTNode;

function findMedian(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let tree = new BST();
        arr1.forEach(value => tree.add(value));
        arr2.forEach(value => tree.add(value));
        return getkElement(tree.root, Math.floor((arr1.length + arr2.length) / 2));
    }
}

function getkElement(node, k, i = 0) {
    if (!node) return null;
    if (i >= k) return node.val;
    let q = getkElement(node.left, k, i + 1);
    if (q) return q;
    return getkElement(node.right, k, i + 1);
}

let arr1 = [1, 6, 4, 3, 2, 7];
let arr2 = [1, 6, 1, 7, 5, 3, 2, 8, 7];

console.log(findMedian(arr1, arr2));