var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

function repairTree(tree) {
    let t = [];
    dumpValuesTo(t, tree.root);
    quicksort(t);
    tree.root = null;
    dumpValuesInto(t, tree);
}

function dumpValuesTo(t, node) {
    if (!node) return;
    dumpValuesTo(t, node.left);
    t.push(node.val);
    dumpValuesTo(t, node.right);
}

function dumpValuesInto(t, tree, start = 0, end = t.length - 1) {
    if (start > end) return;
    let mid = (start + end) / 2;
    tree.add(t[mid]);
    dumpValuesInto(t, tree, start, mid - 1);
    dumpValuesInto(t, tree, mid + 1, end);
}

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    let index = partition(arr, left, right);
    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.round(Math.random() * (arr.length - 1))];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

let t = new BTNode(10);
t.left = new BTNode(5);
t.right = new BTNode(8);
t.left.left = new BTNode(2);
t.left.right = new BTNode(20);
t.right.right = new BTNode(3);
t.right.left = new BTNode(36);

let tree = new BST();
tree.root = t;
// console.log(tree.toString());
repairTree(tree);
console.log(tree.toString());