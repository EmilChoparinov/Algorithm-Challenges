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
        if (node != null) s += node.val;
        s += " ]"
        return s;
    }

    deleteNode(val) {
        let pNode = null;
        let cNode = this.head;
        while (cNode) {
            if (cNode.val == val) {
                if (pNode) {
                    pNode.next = cNode.next;
                }else{
                    this.head = cNode.next;
                }
            }
            pNode = cNode;
            cNode = cNode.next;
        }
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let list = new LinkedList();
list.add(4).add(3).add(2).add(1).add(0);
list.deleteNode(4);
list.deleteNode(2);
list.deleteNode(0);
console.log(list.toString());