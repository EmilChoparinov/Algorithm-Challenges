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

function createCopy(list){
    if(list instanceof LinkedList){
        let newList = new LinkedList();
        let cNode = list.head;
        while(cNode){
            newList.add(cNode.val);
            cNode = cNode.next;
        }
        return newList;
    }
}
let list = new LinkedList();
list.add(5).add(4).add(3).add(2).add(1).add(0);
list2 = createCopy(list);
console.log(list2.toString());