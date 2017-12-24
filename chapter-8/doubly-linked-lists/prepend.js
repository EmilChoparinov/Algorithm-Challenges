const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

/**
 * prepends a value to an existing list
 * @param {LinkedList} list 
 * @param {Any} val item to add
 * @param {Any} existingVal item to add before
 */
function prependValue(list, val, existingVal) {
    if (list instanceof DLinkedList) {
        let newNode = new Node(val);
        let node = list.head;
        while (node) {
            if (node.val == existingVal) break;
            node = node.next;
        }
        if (node) {
            let bNode = node.prev;
            if (bNode) {
                bNode.next = newNode;
                node.prev = newNode;
                newNode.prev = bNode;
                newNode.next = node;
            } else {
                list.head = newNode;
                newNode.next = node;
                node.prev = newNode;
            }
        }
        return null;
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
prependValue(list, 1, "a");
prependValue(list, 1, "c");
console.log(list.toString(), list.toStringB());