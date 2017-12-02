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
     * returns the minimum value of the list
     */
    min(){
        let node = this.head;
        let min = node;
        while(node != null){
            if(min.val > node.val){
                min = node
            }
            node = node.next;
        }
        if(min != null) return min.val;
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
list.add(1).add(-1).add(41).add(1).add(13);
console.log(list.min());