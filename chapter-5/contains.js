class LinkedList {
    constructor() {
        this.head = null;
        this.back = null;
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
     * find if val is in list
     * @param {Object} val 
     */
    contains(val) {
        node = this.head;
        while (node != null) {
            if (node.val == val) return true;
            node = node.next;
        }
        return false;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var list = new LinkedList();
list.add(1).add(2).add(3).add(4);
console.log(list.contains(1), list.contains(5))