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
     * moves minumun of the list to the front to the list
     */
    moveMinToFront() {
        let node = this.head;
        let nodeBeforeMin = node;
        let min = node;
        while (node != null) {
            if(node.next != null){
                if(min.val > node.next.val){
                    min = node.next;
                    nodeBeforeMin = node;
                }
            }
            node = node.next;
        }
        if (nodeBeforeMin != null) {
            let min = nodeBeforeMin.next;
            nodeBeforeMin.next = min.next;
            let f = this.head;
            this.head = min;
            min.next = f;
        }
        return null;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var list = new LinkedList();
list.add(1).add(2).add(3).add(-4).add(4).add(2);
console.log(list.toString());
list.moveMinToFront();
console.log(list.toString());