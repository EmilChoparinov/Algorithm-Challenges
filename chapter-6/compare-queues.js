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

    size(){
        let nodeN = this.head;
        let c = 0;
        while(nodeN){
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

function compareQueues(q1, q2){
    if(q1 instanceof Queue && q2 instanceof Queue){
        if(q1.size() != q2.size()) return false;
        let q1Node = q1.head, q2Node = q2.head;
        while(q1Node && q2Node){
            if(q1Node.val != q2Node.val) return false;
            q1Node = q1Node.next;
            q2Node = q2Node.next;
        }
        return true;
    }
}

var queue = new Queue();
queue.enqueue(1).enqueue(2).enqueue(3);
var queue2 = new Queue();
queue2.enqueue(1).enqueue(2).enqueue(3);
console.log(compareQueues(queue, queue2));
console.log(queue.toString());