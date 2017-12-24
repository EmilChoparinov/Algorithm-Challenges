class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * adds an item to the end of the list
     * @param {Any} val 
     */
    push(val) {
        let node = new DNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
            return this;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        return this;
    }

    /**
     * string representation of the list head first
     */
    toString() {
        let node = this.head;
        let s = "[ ";
        while (node) {
            if (!node.next) break;
            s += `${node.val}, `;
            node = node.next;
        }
        if (node) {
            s += `${node.val} `;
        }
        s += "]";
        return s;
    }

    /**
     * string representation of the list tail first
     */
    toStringB() {
        let node = this.tail;
        let s = "[ ";
        while (node) {
            if (!node.prev) break;
            s += `${node.val}, `;
            node = node.prev;
        }
        if (node) {
            s += `${node.val}`;
        }
        s += "]";
        return s;
    }

    /**
     * removes an item from the end of the list
     * @returns {Any} item data
     */
    pop() {
        let node = this.tail;
        if (node) {
            let newTail = node.prev;
            if (newTail) {
                newTail.next = null;
                this.tail = newTail;
            } else {
                this.head = null;
                this.tail = null;
            }
            return node.val;
        }
        return null;
    }

    /**
     * gets the front node of the list
     * @returns {Any} item data
     */
    front() {
        let node = this.head;
        return (node) ? node.val : null;
    }

    /**
     * gets the last node of the list
     * @returns {Any} item data
     */
    back() {
        let node = this.tail;
        return (node) ? node.val : null;
    }

    /**
     * Value to add to the list
     * @param {Any} val 
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
     * gets the size of the current list
     * @returns {Number} size
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
}

class DNode {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}

module.exports = {
    Node: DNode,
    DLinkedList: DLinkedList,
}