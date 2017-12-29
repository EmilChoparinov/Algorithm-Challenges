class BTNode {
    constructor(value) {
        this.val = value;
        this.right = null;
        this.left = null;
        this.parent = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    /**
     * Adds an item to the tree
     * @param {Any} val 
     */
    add(val) {
        let node = this.root;
        let newNode = new BTNode(val);

        //special case if the tree is empty
        if (!node) {
            this.root = newNode;
            return this;
        }

        //keep traversing through the tree
        //this while(node) condition should never become false
        while (node) {
            if (val > node.val) {

                //if the value being added is smaller go to the left
                if (node.right) {

                    //if that node exists continue going through the tree
                    node = node.right;
                }

                //if that node does not exist add it and break
                else {
                    node.right = newNode;
                    newNode.parent = node;
                    break;
                }
            }

            //if the value being added is bigger or equal to go to the right
            else {

                //if that node exists continue going through the tree
                if (node.left) {
                    node = node.left;
                }

                //if that node does not exist add it and break
                else {
                    node.left = newNode;
                    newNode.parent = node;
                    break;
                }
            }
        }
        return this;
    }

    /**
     * Checks for if item is in the tree
     * @param {Any} val 
     */
    contains(val) {
        let node = this.root;
        while (node) {

            //if the nodes value equals the given value it exists!
            if (node.val == val) return true;

            //if the nodes value is less than the value
            //go right
            if (val > node.val) {

                //if it exists then continue going through the tree
                if (node.right) {
                    node = node.right;
                }

                //if that node does not exist we have reached as far 
                //as we can go and know that the given value does not
                //exist
                else {
                    break;
                }
            }

            //if the nodes value is greater than or equal to the value
            //go left
            else {

                //if it exists then continue going through the tree
                if (node.left) {
                    node = node.left;
                }

                //if that node does not exist we have reached as far
                //as we can go and know that the given value does not
                //exist
                else {
                    break;
                }
            }
        }
        return false;
    }

    /**
     * retrieves minimum item
     * @returns {BTNode} minimum node
     */
    min() {
        let node = this.root;

        //just traverses to the leftmost node
        while (node) {
            if (!node.left) break;
            node = node.left;
        }
        return (node) ? node.val : null;
    }

    /**
     * retrieves maximum item
     * @returns {BTNode} maximum node
     */
    max() {
        let node = this.root;

        //just traverses to the rightmost node
        while (node) {
            if (!node.right) break;
            node = node.right;
        }
        return (node) ? node.val : null;
    }

    /**
     * calculates the size of the tree recursive 
     * @returns {Number} number of nodes
     */
    size(node = this.root) {

        //if the current node does not exist that means that
        //there are no nodes after it so return 0
        if (!node) return 0;

        //recursively grab everything under it left and right
        //and include itself (+1)
        return this.size(node.left) + this.size(node.right) + 1;
    }

    /**
     * determines if tree is empty
     * @returns {Boolean} empty or not
     */
    isEmpty() {
        return (this.root) ? false : true;
    }

    /**
     * calculates the longest sequence from root to leaf
     * @returns {Number} height of the tree
     */
    height(node = this.root) {
        if (!node) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    /**
     * removes an item from the tree
     * @param {Any} val item to remove
     * @param {BTNode} node starting node
     * @returns {Boolean} true if deletion successful, false if not
     */
    remove(val, node = this.root) {
        let removeWithLRNode = function (n) {
            let xNode = n;
            if (xNode.left && xNode.right) {
                let replaceNode = xNode;
                let beforeReplaceNode = null;
                replaceNode = replaceNode.left;
                while (replaceNode) {
                    if (!replaceNode.right) break;
                    beforeReplaceNode = replaceNode;
                    replaceNode = replaceNode.right;
                }
                beforeReplaceNode.right = null;
                xNode.val = replaceNode.val;
            }
        }
        if (!node) return false;
        if (this.root.val == val) {
            if (this.root.left && this.root.right) {
                let replacer = this.root.left;
                let bReplacer = null;
                while (replacer) {
                    if (!replacer.right) break;
                    bReplacer = replacer;
                    replacer = replacer.right;
                }
                bReplacer.right = null;
                this.root.val = replacer.val;
            }
            else if (!this.root.left && !this.root.right) {
                this.root = null;
            }
            else if (this.root.left || this.root.right) {
                let w = (this.root.left) ? this.root.left : this.root.right;
                this.root = w;
            }
            return true;
        }

        if (node.left) {
            if (node.left.val == val) {
                let xNode = node.left;
                if (xNode.left && xNode.right) {
                    removeWithLRNode(node.left);
                }
                else if (!xNode.left && !xNode.right) {
                    node.left = null;
                }
                else if (xNode.left || xNode.right) {
                    let w = (xNode.left) ? xNode.left : xNode.right;
                    node.left = w;
                }
                return true;
            }
        }
        if (node.right) {
            if (node.right.val == val) {
                let xNode = node.right;
                if (xNode.left && xNode.right) {
                    removeWithLRNode(node.right);
                }
                else if (!xNode.left && !xNode.right) {
                    node.right = null;
                }
                else if (xNode.left || xNode.right) {
                    let w = (xNode.left) ? xNode.left : xNode.right;
                    node.right = w;
                }
                return true;
            }
        }
        if (val < node.val) {
            return this.remove(val, node.left)
        }
        else {
            return this.remove(val, node.left);
        }
    }

    /**
     * clears the tree
     */
    removeAll() {
        this.root = null;
    }

    printVals(node = this.root) {
        if (!node) return;
        console.log(node.val);
        this.printVals(node.left);
        this.printVals(node.right);
    }
}

module.exports = {
    BTNode: BTNode,
    BST: BST,
}