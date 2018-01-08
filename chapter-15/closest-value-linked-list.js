const reference = require('../chapter-8/singly-linked-lists/reference-class');
var Node = reference.Node;
var LinkedList = reference.LinkedList;

function closestValue(list, n) {
    if (list instanceof LinkedList) {
        let node = list.head, closest;
        if (node) {
            closest = node.val;
            while (node) {
                if (Math.abs(node.val - n) < Math.abs(closest - n)) {
                    closest = node.val;
                }
                node = node.next;
            }
        }
        return closest;
    }
    return null;
}

function arrayToList(arr) {
    let list = new LinkedList();
    if (arr instanceof Array) {
        arr.forEach(element => {
            list.add(element);
        });
    }
    return list;
}


console.log(closestValue(arrayToList([25, 18, 41, 42, 46, 53, 55, 60, 62, 63, 64, 70, 74, 85]), 12));