class Queue {
    constructor() {
        this.head = null;
    }

    /**
     * queues a value
     * @param {Object} val 
     */
    enqueue(val) {
        let nodeN = this.head;
        while (nodeN) {
            if (!nodeN.next) break;
            nodeN = nodeN.next;
        }
        if (nodeN == null) this.head = new node(val);
        else nodeN.next = new node(val);
        return this;
    }

    size() {
        let nodeN = this.head;
        let c = 0;
        while (nodeN) {
            c++;
            nodeN = nodeN.next;
        }
        return c;
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
        if (node != null) s += node.val;
        s += " ]"
        return s;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var queue = new Queue();