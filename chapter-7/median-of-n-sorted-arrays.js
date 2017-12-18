class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        let addNode = new Node(val);
        let node = this.root;
        if (!node) {
            this.root = addNode;
            return this;
        }
        while (node) {
            if (val < node.val) {
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = addNode;
                    break;
                }
            }
            else if (val >= node.val) {
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = addNode;
                    break;
                }
            }
        }
        return this;
    }

    contains(val) {
        let node = this.root;
        while (node) {
            if (node.val == val) {
                return true;
            }
            if (node.val > val) {
                if (node.left) {
                    node = node.left;
                } else {
                    break;
                }
            }
            else if (node.val <= val) {
                if (node.right) {
                    node = node.right;
                } else {
                    break;
                }
            }
        }
        return false;
    }

    min() {
        let node = this.root;
        while (node) {
            if (node.left) {
                node = node.left;
            } else {
                return node.val;
            }
        }
    }

    max() {
        let node = this.root;
        while (node) {
            if (node.right) {
                node = node.right;
            } else {
                return node.val;
            }
        }
    }

    toArray(root=this.root, arr = []){
        if(!root) return;
        this.toArray(root.left, arr);
        arr.push(root.val);
        this.toArray(root.right, arr);
        return arr;
    }
}
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function medianOfNSortedArrays(...arrays) {
    let bst = new BST();
    arrays.forEach(array => {
        array.forEach(element => {
            bst.add(element);
        })
    })
    let arr = bst.toArray();
    console.log(arr);
    return arr[Math.floor(arr.length/2)];
}
let x = [1, 5, 9];
let y = [1, 2, 3, 4, 5];
let z = [1,6,7,8,9];
console.log(medianOfNSortedArrays(x, y, z));