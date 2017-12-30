const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;


function combineLinkedList(list1, list2) {
    if (list1 instanceof LinkedList && list2 instanceof LinkedList) {
        let list = new LinkedList();
        let node1 = list1.head, node2 = list2.head;
        while (node1 && node2) {
            if (node1.val < node2.val) {
                list.add(node1.val);
                node1 = node1.next;
            } else {
                list.add(node2.val);
                node2 = node2.next;
            }
        }
        let lastPart = (node1) ? node1 : node2;
        while (lastPart) {
            list.add(lastPart.val);
            lastPart = lastPart.next;
        }
        return list;
    }
    return null;
}

let list1 = new LinkedList();
list1.add(5).add(12).add(13);
let list2 = new LinkedList();
list2.add(1).add(4).add(5).add(50);
console.log(combineLinkedList(list1, list2).toString());