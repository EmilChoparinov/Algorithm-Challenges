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

function getSecondLargest(list){
    if(list instanceof LinkedList){
        let cNode = list.head;
        if(cNode){
            let largest = cNode.val;
            let secondLargest = cNode.val;
            while(cNode){
                if(largest < cNode.val){
                    secondLargest = largest;
                    largest = cNode.val;
                }
                cNode = cNode.next;
            }
            return secondLargest;
        }
    }
}
let list = new LinkedList();
list.add(1).add(3).add(5).add(2).add(4);
console.log(getSecondLargest(list));