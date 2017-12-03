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

    prependVal(val,before){
        let node1 = new node(val);
        let nodeA = this.head;
        let beforeNode = nodeA;
        while(nodeA != null){
            if(nodeA.next != null){
                if(nodeA.next.val == before){
                    beforeNode = nodeA;
                    break;
                }
            }
            nodeA = nodeA.next;
        }
        if(beforeNode != null){
            let temp = beforeNode.next;
            beforeNode.next = node1;
            node1.next = temp;
        }else{
            this.add(node1.val);
        }
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let list = new LinkedList();
list.add(5).add(4).add(3).add(2).add(1);
list.prependVal(12, 3);
console.log(list.toString());