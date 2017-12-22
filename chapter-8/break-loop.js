const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

/**
 * Gets the node that started the loop
 * @param {LinkedList} list 
 */
function breakLoop(list) {
    if (list instanceof LinkedList) {
        let node1 = list.head;
        let node2 = list.head;
        while (node2 && node1) {
            node1 = node1.next;
            node2 = node2.next;
            if (node2) {
                last = node2;
                node2 = node2.next;
            } else {
                break;
            }
            if (node2 == node1) {
                node1 = list.head;
                let lastNode = null;
                while (node1 != node2) {
                    lastNode = node2;
                    node1 = node1.next;
                    node2 = node2.next;
                }
                lastNode.next = null;
            }
        }
    }
}

let list = new LinkedList();
list.add(1).add(2).add(3).add(4)
let node = list.head.next;
let end = list.head;
while (end) {
    if (!end.next) break;
    end = end.next;
}
end.next = node;
breakLoop(list)
console.log(list.toString());

module.exports = {
    breakLoop : breakLoop
}