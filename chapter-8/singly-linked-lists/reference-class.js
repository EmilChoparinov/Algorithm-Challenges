class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a value to the linked list
     * @param {Object} val 
     */
    addToFront(val) {
        var lastNode = this.head;
        var addNode = new Node(val);
        this.head = addNode;
        addNode.next = lastNode;
        return this;
    }

    /**
     * returns a formatted string of the list
     */
    toString() {
        let node = this.head;
        let s = "[ "
        while (node != null) {
            if (node.next == null) break;
            s += node.val + ", ";
            node = node.next;
        }
        if (node) {
            s += node.val;
        }
        s += " ]";
        return s;
    }

    /**
     * inserts a value to the back of the list
     * @param {Object} val 
     */
    add(val) {
        let node1 = this.head;
        while (node1 != null) {
            if (node1.next == null) break;
            node1 = node1.next;
        }
        if (node1) {
            node1.next = new Node(val);
        } else {
            this.head = new Node(val);
        }
        return this;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
}