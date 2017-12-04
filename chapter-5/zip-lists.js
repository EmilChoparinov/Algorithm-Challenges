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

/**
 * Iterates through two linked lists and combines them to one by alternation through each iteration O(n+m) solution
 * @param {LinkedList} list1 
 * @param {LinkedList} list2 
 */
function zipLists(list1, list2){
    if(list1 instanceof LinkedList && list2 instanceof LinkedList){
        let node1 = list1.head;
        let node2 = list2.head;
        let newList = new LinkedList();
        while(node1 && node2){
            newList.add(node1.val);
            newList.add(node2.val);
            node2 = node2.next;
            node1 = node1.next;
        }
        let lastPiece = node1 ? node1 : node2;
        while(lastPiece){
            newList.add(lastPiece.val);
            lastPiece = lastPiece.next;
        }
        return newList;
    }
}

let list = new LinkedList();
list.add(5).add(4).add(3).add(2).add(1);
let list2 = new LinkedList();
list2.add(-5).add(-4).add(-3).add(-2).add(-1);
console.log(zipLists(list, list2).toString());