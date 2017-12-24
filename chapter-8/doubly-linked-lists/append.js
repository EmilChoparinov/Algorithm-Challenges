const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

/**
 * appends a value after the existing value given
 * @param {DLinkedList} list list to append to
 * @param {Any} val value to append
 * @param {Any} existingVal value to append after
 */
function appendValue(list, val, existingVal) {
    if (list instanceof DLinkedList) {
        let newNode = new Node(val);
        let node = list.head;
        while (node) {
            if (node.val == existingVal) break;
            node = node.next;
        }
        if (node) {
            let aNode = node.next;
            if (aNode) {
                node.next = newNode;
                newNode.prev = node;
                aNode.prev = newNode;
                newNode.next = aNode;
            } else {
                list.tail = newNode;
                newNode.prev = node;
                node.next = newNode;
            }
        }
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
appendValue(list, 1, "d");
appendValue(list, 2, "b");
console.log(list.toString(), list.toStringB());