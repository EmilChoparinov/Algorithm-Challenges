const testSort = require("./sort-tester");
const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;

function selectionSort(list) {
    if (list instanceof LinkedList) {
        let currentNodeToSort = list.head;
        let b = null;
        while (currentNodeToSort) {
            let values = getNextMin(currentNodeToSort);
            if (values.minNode != currentNodeToSort) {
                if (currentNodeToSort == list.head) {
                    list.head = values.minNode;
                    if (values.beforeNode && values.minNode) {
                        values.beforeNode.next = values.minNode.next;
                        values.minNode.next = currentNodeToSort;
                    }
                } else {
                    if (values.beforeNode && values.minNode) {
                        values.beforeNode.next = values.minNode.next;
                        values.minNode.next = b.next;
                        b.next = values.minNode;
                        currentNodeToSort = values.minNode.next;
                    }
                }
                b = values.minNode;
            } else {
                b = currentNodeToSort;
                currentNodeToSort = currentNodeToSort.next;
            }
        }
    }
    return list;
}

function getNextMin(node) {
    if (node instanceof Node) {
        let bcNode = null;
        let cNode = node;
        if (node) {
            bcNode = node;
            let bTraversal = node;
            let traversal = node.next;
            while (traversal) {
                if (cNode.val > traversal.val) {
                    cNode = traversal;
                    bcNode = bTraversal;
                }
                bTraversal = traversal;
                traversal = traversal.next;
            }
        }
        return {
            beforeNode: bcNode,
            minNode: cNode,
        }
    }
}

testSort('linked', selectionSort);