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
        if (nodeN == null) this.head = new Node(val);
        else nodeN.next = new Node(val);
        return this;
    }

    /**
     * dequeues a value
     */
    dequeue() {
        if (this.head) {
            let nodeN = this.head;
            this.head = nodeN.next;
            return nodeN;
        }
    }

    /**
     * returns the next value to dequeue in the queues
     */
    front() {
        let nodeN = this.head;
        while (nodeN) {
            if (!nodeN.next) break;
            nodeN = nodeN.next;
        }
        return nodeN;
    }

    /**
     * see if value is queued up
     * @param {Any} val 
     * @returns {Boolean}
     */
    contains(val) {
        let nodeN = this.head;
        while (nodeN) {
            if (nodeN.val == val) return true;
            nodeN = nodeN.next;
        }
        return false;
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

    removeMinimum() {
        if (this.head) {
            let nodeN = this.head;
            let minBeforePointer = nodeN;
            let minValue = nodeN.val;
            while (nodeN) {
                if (nodeN.next) {
                    if (minValue >= nodeN.next.val) {
                        minValue = nodeN.next.val;
                        minBeforePointer = nodeN;
                    }
                }
                nodeN = nodeN.next;
            }
            console.log(minBeforePointer);
            minBeforePointer.next = minBeforePointer.next.next;
        }
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
        if (node != null) s += node.val;
        s += " ]"
        return s;
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
    Queue: Queue,
}