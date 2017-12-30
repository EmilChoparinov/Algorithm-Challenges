const testSort = require("./sort-tester");
const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;

LinkedList.prototype.size = function () {
    let c = 0;
    let node = this.head;
    while (node) {
        c++;
        node = node.next;
    }
    return c;
}

LinkedList.prototype.slice = function (start, end) {
    let list = new LinkedList();
    let node = this.head;
    let c = 0;
    while (node && c < end) {
        if (c >= start) list.add(node.val);
        node = node.next;
        c++;
    }
    return list;
}

function mergeSort(list) {
    if (list instanceof LinkedList) {
        if (list.size() == 1) return list;
        let s = mergeSort(list.slice(0, list.size() / 2));
        let f = mergeSort(list.slice(list.size() / 2, list.size()));
        return combineLinkedList(s, f);
    }
}

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

testSort('linked', mergeSort);