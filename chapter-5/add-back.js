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
            if(node.next == null) break;
            s += node.val + ", ";
            node = node.next;
        }
        s += node.val + " ]";
        return s;
    }

    /**
     * inserts a value to the back of the list
     * @param {Object} val 
     */
    addToBack(val){
        let node1 = this.head;
        while(node1 != null){
            if(node1.next == null) break;
            node1 = node1.next;
        }
        node1.next = new node(val);
        return this;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let list = new LinkedList();
list.add(1).add(2).add(3);
console.log(list.toString());
list.addToBack(0);
console.log(list.toString());