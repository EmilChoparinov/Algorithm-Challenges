var reference = require('../chapter-11/reference-class');
var BST = reference.BST;
let BTNode = reference.BTNode;

function repairTree(node) {
    var firstViolation, secondViolation, last;
    let repair = function (node) {
        if (!node) return;
        repair(node.left);
        if (last) {
            // console.log(`${node.val} -> ${last.val}`);
            if (node.val < last.val) {
                if (!firstViolation) {
                    firstViolation = last;
                }
                else {
                    secondViolation = node;
                    let i = firstViolation.val;
                    firstViolation.val = secondViolation.val;
                    secondViolation.val = i;
                    firstViolation = secondViolation = null;
                }
            }
        }
        last = node;
        repair(node.right);
    };
    repair(node);
    // console.log(firstViolation, secondViolation, b);
}

function inOrderPrint(node) {
    let s = '[ ';
    let f = function stringify(node) {
        if (node instanceof BTNode) {
            stringify(node.left);
            s += ` ${node.val} `;
            stringify(node.right);
        }
    };
    f(node);
    s += ' ]';
    return s;
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
console.log(inOrderPrint(t));
repairTree(tree);
console.log(inOrderPrint(t));