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

    /**
     * interleaves values
     */
    interleaveQueue() {
        if (this.head) {
            let nodeN = this.head;
            let c = Math.ceil(this.size() / 2);
            while (c > 1) {
                nodeN = nodeN.next;
                c--;
            }
            let toInterleave = nodeN.next;
            nodeN.next = null;
            nodeN = this.head;
            while (toInterleave) {
                let temp1 = nodeN.next;
                let temp2 = toInterleave.next;
                nodeN.next = toInterleave;
                toInterleave.next = temp1;
                toInterleave = temp2;
                nodeN = nodeN.next.next;
            }
        }
        return this;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let queue = new Queue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6);
queue.interleaveQueue();
console.log(queue.toString());