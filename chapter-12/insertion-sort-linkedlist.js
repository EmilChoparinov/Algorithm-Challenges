const testSort = require("./sort-tester");
const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;

function insertionSort(list) {
    if (list instanceof LinkedList) {
        let bNode = list.head;
        if (bNode) {
            let cNode = bNode.next;
            let sortedIndex = 0;
            let k = 0;
            while (true) {
                while (k < sortedIndex && cNode) {
                    bNode = cNode;
                    cNode = cNode.next;
                    k++;
                }
                if (!cNode) {
                    break;
                } else {
                    bNode.next = cNode.next;
                    insert(list, cNode, cNode.next);
                    bNode = list.head;
                    cNode = bNode.next;
                    sortedIndex++;
                    k = 0;
                }
            }
        }
    }
    return list;
}

function insert(list, node, stop) {
    if (list instanceof LinkedList && node instanceof Node) {
        // let b = null;
        let cNode = list.head;
        if (node.val < cNode.val) {
            list.head = node;
            node.next = cNode;
        } else {
            while (cNode && node.val > cNode.val) {
                if(cNode.next == stop) break;
                // b = cNode;
                cNode = cNode.next;
            }
            if (cNode) {
                // b.next = node;
                let t = cNode.next;
                cNode.next = node;
                node.next = t;
            } else {
                // b.next = node;
            }
        }
    }
}

testSort('linked', insertionSort);
// let list = new LinkedList();
// list.add(44).add(38).add(5).add(47);
// insert(list, new Node(1));
// insert(list, new Node(5));
// insert(list, new Node(50));
// console.log(list.toString());