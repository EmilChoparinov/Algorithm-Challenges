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
 * removes a range of values from the list [low,high]
 * @param {LinkedList} list 
 * @param {Number} low lower bound
 * @param {Number} high higher bound
 */
function filter(list, low, high) {
    if (list instanceof LinkedList && typeof low == "number" && typeof high == "number") {
        let pNode = null;
        let cNode = list.head;
        while (cNode) {
            if (cNode.val >= low && cNode.val <= high) {
                if(pNode){
                    pNode.next = cNode.next;
                    cNode = pNode;
                }else{
                    list.head = cNode.next;
                }
            }
            pNode = cNode;
            cNode = cNode.next;
        }
        return list;
    }
}

let list = new LinkedList();
list.add(5).add(4).add(3).add(2).add(1).add(0).add(-1).add(-2).add(-3).add(-4).add(-5).add(-6);
console.log(list.toString())
console.log(filter(list, -3, 3).toString());