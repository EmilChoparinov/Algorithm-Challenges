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
 * prepends a value to a linked list by head being considered first element
 * @param {LinkedList|Any} list 
 * @param {object} val the val to append
 * @param {Object} before the node
 */
function prepend(list, val, before) {
    if (list instanceof LinkedList) {
        node1 = list.head;
        while (node1 != null) {
            if (node1.next != null) {
                if (node1.next.val == before) {
                    break;
                }
            }
            node1 = node1.next;
        }
        if(node1 == null){
            list.add(val);
            return this;
        }
        let temp = node1.next;
        let newNode = new node(val);
        node1.next = newNode;
        newNode.next = temp;
        return this;
    }
}
let list = new LinkedList();
list.add(1).add(2).add(3).add(4).add(5);
console.log(list.toString());
prepend(list, 6, 5);
console.log(list.toString());