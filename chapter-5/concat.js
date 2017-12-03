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
 * Concats list1 to list2 and returns that as a new list
 * @param {LinkedList} list1 
 * @param {LinkedList} list2 
 */
function concat(list1, list2) {
    if (list1 instanceof LinkedList && list2 instanceof LinkedList) {
        let newList = new LinkedList();
        if (list1.head) {
            newList.head = list1.head;
        }
        else {
            if (list2.head) {
                newList.head = list2.head;
            }
            return newList;
        }
        let node = newList.head;
        while (node) {
            if (node.next) {
                node = node.next;
            } else break;
        }
        node.next = list2.head;
        return newList;
    }
}
let list1 = new LinkedList();
// list1.add(1).add(2).add(3).add(4);
let list2 = new LinkedList();
console.log(concat(list1, list2).toString());