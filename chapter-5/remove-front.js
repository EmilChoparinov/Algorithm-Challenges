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
        let lastNode = this.head;
        let addNode = new node(val);
        this.head = addNode;
        addNode.next = lastNode;
        if (this.back == null) this.back = addNode;
        return this;
    }

    removeFront() {
        if (this.head != null) {
            this.head = this.head.next;
            return this;
        }
        throw new Error("List is empty");
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(node.val);
            node = node.next;
        }
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var list = new LinkedList();
list.add(1).add(2).add(3).add(4);;
list.removeFront();
list.print();