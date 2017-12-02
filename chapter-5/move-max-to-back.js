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
        if(node != null) s += node.val;
        s += " ]";
        return s;
    }

    /**
    * moves minumun of the list to the front to the list
    */
    moveMaxToBack() {
        let node = this.head;
        let nodeBeforeMax = node;
        let max = node;
        while (node != null) {
            if (node.next != null) {
                if (max.val < node.next.val) {
                    max = node.next;
                    nodeBeforeMax = node;
                }
            }else{
                break;
            }
            node = node.next;
        }
        if (nodeBeforeMax != null) {
            let max = nodeBeforeMax.next;
            nodeBeforeMax.next = max.next;
            let b = node;
            b.next = max;
            max.next = null;
        }
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
list.add(1).add(22).add(3).add(-4).add(4).add(2);
console.log(list.toString());
list.moveMaxToBack();
console.log(list.toString());