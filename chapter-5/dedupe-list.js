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
 * removes duplicate values in the linked list. O(2n) time and O(n) space
 * @param {LinkedList} list 
 */
function removeDuplicates(list) {
    if (list instanceof LinkedList) {
        let seen = {};
        let node = list.head;
        while (node) {
            seen[node.val] = "seen";
            node = node.next;
        }
        
        node = list.head;
        let keys = Object.keys(seen);
        for (let i = 0; i < keys.length-1; i++) {
            node.val = keys[i];
            node = node.next;
        }
        node.val = keys[keys.length-1];
        console.log(seen, node.val);
        node.next= null;
    }
}

let list = new LinkedList();
list.add(1).add(2).add(3).add(-1).add(2).add(3).add(12);
removeDuplicates(list);
console.log(list.toString());