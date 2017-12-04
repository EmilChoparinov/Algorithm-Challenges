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

    /**
     * Removes the value from the list
     * @param {Any} val 
     * @returns {LinkedList} class context
     */
    removeVal(val) {
        if(this.head != null){
            if(this.head.val == val){
                this.head = this.head.next;
                return this;
            }
        }
        let pNode = this.head;
        if(pNode != null){
            let cNode = pNode.next;
            while(cNode != null){
                if(cNode.val == val){
                    pNode.next = cNode.next;
                    break;
                }else{
                    pNode = cNode;
                    cNode = cNode.next;
                }
            }
        }
        return this;
    }
}

class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let list = new LinkedList();
list.add(1).add(2).add(3).add(4);
list.removeVal(4).removeVal(1);
list.removeVal(2);
list.removeVal(3);
console.log(list.toString());