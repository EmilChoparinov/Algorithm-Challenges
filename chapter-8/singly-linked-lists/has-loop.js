const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

/**
 * Finds out if a linked list loops somewhere
 * @param {LinkedList} list 
 */
function hasLoop(list) {
    if (list instanceof LinkedList) {
        let node1 = list.head;
        let node2 = list.head;
        while (node2 && node1) {
            node1 = node1.next;
            node2 = node2.next;
            if (node2) {
                node2 = node2.next;
            } else {
                break;
            }
            if (node2 == node1) return true;
        }
        return false;
    }
    return false;
}

let list = new LinkedList();
list.add(1).add(2).add(3).add(4);
let node = list.head.next;
let end = list.head;
while (end) {
    if (!end.next) break;
    end = end.next;
}
end.next = node;
console.log(hasLoop(list));