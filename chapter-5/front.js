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

    print() {
        let node = this.head;
        while (node != null) {
            console.log(node.val);
            node = node.next;
        }
    }

    front(){
        node = this.head();
        if(node != null) return node.val;
        return null;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}