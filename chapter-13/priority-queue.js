class Node {
    constructor(val, priority) {
        this.next = null;
        this.val = val;
        this.pri = priority;
    }

    toString() {
        return `(${this.val}, ${this.pri})`
    }
}

class PriQueue {
    constructor() {
        this.head = null;
    }
    enqueue(val, priority) {
        let b = this.head;
        if (!b) {
            this.head = new Node(val, priority);
            return this;
        }
        b = null;
        let node = this.head;
        while (node) {
            if (node.pri > priority) break;
            b = node;
            node = node.next;
        }
        let n = new Node(val, priority);
        if (!b) {
            this.head = n;
            n.next = node;
        }
        else if (node) {
            b.next = n;
            n.next = node;
        }
        else {
            b.next = n;
        }
        return this;
    }

    contains(val) {
        let node = this.head;
        while (node) {
            if (node.val == val) return true;
            node = node.next;
        }
        return false;
    }

    toString() {
        let node = this.head;
        let s = "[ ";
        while (node) {
            if (!node.next) break;
            s += `${node.toString()}, `;
            node = node.next;
        }
        if (node) {
            s += ` ${node.toString()} `;
        }
        return s += "]";
    }

    dequeue() {
        let n = this.head;
        this.head = (n) ? n.next : null;
        return (n) ? n : null;
    }
}

module.exports = {
    Node: Node,
    PriQueue: PriQueue
}