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
        if(node != null)s += node.val;
        s += " ]"
        return s;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function secondToLast(list){
    if(list instanceof LinkedList){
        let pNode = null;
        let tNode = list.head;
        while(tNode){
            if(!tNode.next) break;
            pNode = tNode;
            tNode = tNode.next;
        }
        return pNode.val;
    }
}

let list = new LinkedList();
list.add(4).add(3).add(2).add(1);
console.log(list.toString(), secondToLast(list));