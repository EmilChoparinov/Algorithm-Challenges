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
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Splits the linked list into two linkedlists by the value of a node
 * @param {LinkedList} list 
 * @param {Any} val 
 * @returns {LinkedList} part of the list that was split
 */
function splitValue(list, val) {
    if (list instanceof LinkedList) {
        node = list.head;
        while (node != null) {
            if (node.next != null) {
                if (node.next.val == val) {
                    break;
                }
            }
            node = node.next;
        }
        if (node != null) {
            let temp = node.next;
            node.next = null;
            let newList = new LinkedList();
            newList.head = temp;
            return newList;
        }
    }
}
let list = new LinkedList();
list.add(1).add(3).add(5).add(2).add(4);
console.log(list.toString());
let list2 = splitValue(list, 5);
console.log(list.toString());
console.log(list2.toString());