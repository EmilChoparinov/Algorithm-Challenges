const testSort = require("./sort-tester");
const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;

function bubbleSort(list) {
    if (list instanceof LinkedList) {
        let prev = null;
        let node1 = list.head;
        if (node1) {
            let node2 = node1.next;
            let hasChanged = true;
            while (hasChanged) {
                hasChanged = false;
                while (node2) {
                    if (node1.val > node2.val) {
                        hasChanged = true;
                        if (prev) {
                            prev.next = node2;
                            node1.next = node2.next;
                            node2.next = node1;
                            prev = node2;
                            node2 = node1.next;
                        } else {
                            list.head = node2;
                            node1.next = node2.next;
                            node2.next = node1;
                            prev = node2;
                            node2 = node1.next;
                        }
                    } else {
                        prev = node1;
                        node1 = node1.next;
                        node2 = node2.next;
                    }
                }
                prev = null;
                node1 = list.head;
                node2 = node1.next;
            }
        }
    }
    return list;
}

testSort('linked', bubbleSort);