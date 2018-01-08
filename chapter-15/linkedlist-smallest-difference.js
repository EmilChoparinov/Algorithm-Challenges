const reference = require('../chapter-8/singly-linked-lists/reference-class');
var Node = reference.Node;
var LinkedList = reference.LinkedList;

function smallestDifference(list) {
    let min = Number.MAX_VALUE;
    if (list instanceof LinkedList) {
        let node = list.head;
        if (node) {
            let next = node.next;
            while (next) {
                min = Math.min(min, Math.abs(next.val - node.val));
                next = next.next;
                node = node.next;
            }
        }
    }
    return min;
}

let list = new LinkedList();
list.add(3).add(15).add(20).add(52).add(16);
console.log(smallestDifference(list));