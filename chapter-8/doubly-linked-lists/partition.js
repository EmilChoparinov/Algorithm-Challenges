const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

function partition(list, val) {
    if (list instanceof DLinkedList) {
        let lessList = new DLinkedList();
        let largeList = new DLinkedList();
        while (list.head) {
            let v = list.pop();
            if (v < val) {
                lessList.push(v);
            } else {
                largeList.push(v);
            }
        }
        while (lessList.head) list.push(lessList.pop());
        while (largeList.head) list.push(largeList.pop());
    }
}

//1->4->3->2->5->2
let list = new DLinkedList();
list.push(1).push(4).push(3).push(2).push(5).push(2);
partition(list, 3);
console.log(list.toString(), list.toStringB());