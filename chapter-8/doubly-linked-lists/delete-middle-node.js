const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

function deleteMiddleNode(list) {
    if (list instanceof DLinkedList) {
        let nodeH = list.head;
        let nodeT = list.tail;
        while (nodeH != nodeT) {
            nodeH = nodeH.next;
            if (nodeH == nodeT) break;
            nodeT = nodeT.prev;
        }
        if (nodeH) {
            let bNode = nodeH.prev;
            let aNode = nodeH.next;

            if (bNode) bNode.next = aNode;
            else list.head = aNode;

            if (aNode) aNode.prev = bNode;
            else list.tail = bNode;
            return nodeH.val;
        }
        return null;
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
console.log(deleteMiddleNode(list));
console.log(deleteMiddleNode(list));
console.log(deleteMiddleNode(list));
console.log(deleteMiddleNode(list));
console.log(list.toString(), list.toStringB());