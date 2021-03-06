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
     * returns the largest value of the list
     */
    max(){
        let node = this.head;
        let max = node;
        while(node != null){
            if(max.val < node.val){
                max = node;
            }
            node = node.next;
        }
        if(max != null) return max.val;
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
list.add(1).add(10).add(3).add(4);
console.log(list.max());