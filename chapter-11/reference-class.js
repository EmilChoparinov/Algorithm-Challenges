class BTNode {
    constructor(value) {
        this.val = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        let node = this.root;
        let newNode = new BTNode(val);
        if (!node) {
            this.root = newNode;
            return this;
        }
        while (node) {
            if (val > node.val) {
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = newNode;
                    break;
                }
            }
            else {
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = newNode;
                    break;
                }
            }
        }
        return this;
    }


    contains(val) {
        let node = this.root;
        while (node) {
            if (node.val == val) return true;
            if (val > node.val) {
                if (node.right) {
                    node = node.right;
                } else {
                    return false;
                }
            }
            else {
                if (node.left) {
                    node = node.left;
                } else {
                    return false;
                }
            }
        }
    }

    min() {
        let node = this.root;
        while (node) {
            if (!node.left) break;
            node = node.left;
        }
        return (node) ? node.val : null;
    }

    max() {
        let node = this.root;
        while (node) {
            if (!node.right) break;
            node = node.right;
        }
        return (node) ? node.val : null;
    }

    size(node = this.root) {
        if (!node) return 0;
        return this.size(node.left) + this.size(node.right) + 1;
    }
    isEmpty() {
        return (this.root) ? false : true;
    }
}

let tree = new BST();
tree.add(5).add(4).add(6).add(2);
console.log(tree.isEmpty());