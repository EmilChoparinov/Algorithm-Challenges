const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

/**
 * Reverses linked list
 * @param {DLinkedList} list 
 */
function reverse(list) {
    if (list instanceof DLinkedList) {
        let node = list.head;
        while (node) {
            let t = node.next;
            node.next = node.prev;
            node.prev = t;
            node = t;
        }
        let t = list.head;
        list.head = list.tail;
        list.tail = t;
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
console.log(list.toString(), list.toStringB());
reverse(list);
console.log(list.toString(), list.toStringB());