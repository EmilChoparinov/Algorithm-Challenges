let reference = require("../chapter-8/singly-linked-lists/reference-class");
let LinkedList = reference.LinkedList;

function rListLength(node) {
    if(!node) return 0;
    return rListLength(node.next) + 1;
}

let list = new LinkedList();
list.add("a").add("b").add("c");
console.log(rListLength(list.head));