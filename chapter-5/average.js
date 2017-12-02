class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a value to the linked list
     * @param {Object} val 
     */
    add(val) {
        var lastNode = this.head;
        var addNode = new node(val);
        this.head = addNode;
        addNode.next = lastNode;
        if (this.back == null) this.back = addNode;
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
        s += node.val + " ]";
        return s;
    }

    /**
     * returns average value of all the nodes
     */
    average() {
        let node = this.head
        let length = 0, sum = 0;
        while (node != null) {
            length++;
            sum += node.val;
            node = node.next;
        }
        return sum / length;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let list = new LinkedList();
list.add(1).add(3).add(100).add(6);
console.log(list.average());