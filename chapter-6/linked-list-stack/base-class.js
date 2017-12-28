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
        return (temp)? temp.val: null;
    }

    /**
     * Gets the value on top of the stack (next one to be popped)
     */
    top() {
        return (this.head) ? this.head.val : this.head;
    }

    /**
     * Checks if value exists in the object
     * @param {Any} val 
     * @returns {Boolean}
     */
    contains(val) {
        let node = this.head;
        while (node) {
            if (node.val == val) return true;
            node = node.next;
        }
        return false;
    }

    /**
     * Checks if stack is empty
     * @returns {Boolean}
     */
    isEmpty() {
        return (this.head) ? false : true;
    }

    /**
     * Gets the size of the stack
     */
    size() {
        let node = this.head;
        let c = 0;
        while (node) {
            c++;
            node = node.next;
        }
        return c;
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

/**
 * Compares two stacks to see if they contain the same values
 * @param {SLStack} stack1 
 * @param {SLStack} stack2 
 */
function CompareStacks(stack1, stack2) {
    if (stack1 instanceof SLStack && stack2 instanceof SLStack) {
        let node1 = stack1.head
        let node2 = stack2.head;
        while (node1 != null && node2 != null) {
            if (node1.val != node2.val) return false;
            node1 = node1.next;
            node2 = node2.next;
        }
        if ((node1 && !node2) || (!node1 && node2)) return false;
        else return true;
    }
}

module.exports = {
    SLStack: SLStack,
    Node: Node
}