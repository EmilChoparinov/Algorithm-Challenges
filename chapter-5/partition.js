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

function partition(list, value) {
    if (list instanceof LinkedList) {
        let vNode = list.head;
        while (vNode) {
            if (vNode.val == value) break;
            vNode = vNode.next;
        }
        if (vNode) {
            let pCheck = null;
            let check = list.head;
            while (check) {
                if (check.val < value) {
                    if (pCheck) {
                        pCheck.next = check.next;
                        list.add(check.val);
                    } else {
                        list.head = check.next;
                        list.add(check.val);
                    }
                }else{
                    if(pCheck){
                        pCheck.next = check.next;
                        let temp = vNode.next;
                        vNode.next = check;
                        check.next = temp;
                        // check = pCheck;
                    }
                }
                pCheck = check;
                check = check.next;
            }
        }
    }
}
let list = new LinkedList();
list.add(1).add(3).add(5).add(2).add(4).add(-1).add(8).add(-6);
console.log(list.toString());
partition(list, 2);
console.log(list.toString());