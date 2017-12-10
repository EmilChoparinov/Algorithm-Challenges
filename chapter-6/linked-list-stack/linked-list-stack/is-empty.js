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
     * Checks if stack is empty
     * @returns {Boolean}
     */
    isEmpty() {
        return (this.head) ? false : true;
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