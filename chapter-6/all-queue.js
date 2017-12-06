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
        let nodeN =this.head;
        while(nodeN){
            if(nodeN.val == val) return true;
            nodeN = nodeN.next;
        }
        return false;
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
queue.enqueue(1).enqueue(2).enqueue(3);
console.log(queue.contains(3), queue.contains(-3));
console.log(queue.toString());