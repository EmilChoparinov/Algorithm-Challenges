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
        var addNode = new node1(val);
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
            if(node.next == null) break;
            s += node.val + ", ";
            node = node.next;
        }
        if(node != null)s += node.val;
        s += " ]"
        return s;
    }
}

class node1 {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let list = new LinkedList();
console.log(list.toString());