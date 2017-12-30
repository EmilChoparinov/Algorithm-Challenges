const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;

function partition(list) {
    if (list instanceof LinkedList) {
        let newList = new LinkedList();
        let pivot = list.head;
        if (pivot) {
            let node = pivot.next;
            while (node) {
                if (node.val < pivot.val) {
                    newList.add(node.val);
                }
                node = node.next;
            }
            newList.add(pivot.val);
            node = pivot.next;
            while (node) {
                if (node.val >= pivot.val) {
                    newList.add(node.val);
                }
                node = node.next;
            }
        }
        return newList;
    }
}

let list = new LinkedList();
list.add(5).add(1).add(8).add(4).add(9).add(2).add(5).add(3);
console.log(partition(list).toString());