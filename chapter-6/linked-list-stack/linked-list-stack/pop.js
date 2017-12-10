class SLStack {
    constructor() {
        this.head = null;
    }

    /**
     * Add a value to the stack
     * @param {Any} val 
     */
    push(val) {
        let temp = this.head;
        let node = new Node(val);
        this.head = node;
        node.next = temp;
        return this;
    }

    /**
     * Removes the next value in the stack
     */
    pop() {
        let temp = this.head;
        if (temp) {
            this.head = temp.next;
        }
        return this;
    }

    /**
     * String representation of stack object
     * @returns {String}
     */
    toString() {
        let node = this.head;
        let s = "[ ";
        while (node) {
            if (!node.next) break;
            s += node.val + ", ";
            node = node.next;
        }
        if (node) {
            s += node.val;
        }
        s += " ]";
        return s;
    }
}

class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}

let linkedStack = new SLStack();