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
 * Removes all negative values in the given LinkedList
 * @param {LinkedList|Number} list LinkedList of numbers
 */
function removeNegatives(list) {
    if (list instanceof LinkedList) {
        if (list.head) {
            if (list.head.val < 0) {
                let tempNode = list.head.next;
                while (tempNode) {
                    if (tempNode.val > 0) break;
                    tempNode = tempNode.next;
                }
                list.head = tempNode;
            }
            node = list.head;
            while (node) {
                if (node.next) {
                    if (node.next.val < 0) {
                        let tempNode = node.next;
                        while (tempNode) {
                            if (tempNode.val > 0) break;
                            tempNode = tempNode.next;
                        }
                        node.next = tempNode;
                        node = tempNode;
                    }
                }
                node = node.next;
            }
        }
    }
    return this;
}
let list = new LinkedList();
list.add(1).add(-1).add(5).add(6).add(-12).add(-3);
removeNegatives(list);
console.log(list.toString());