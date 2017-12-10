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

let linkedStack = new SLStack();