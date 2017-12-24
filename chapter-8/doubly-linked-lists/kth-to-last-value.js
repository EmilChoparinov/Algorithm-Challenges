const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

/**
 * get the element k distance from end of list
 * @param {DLinkedList} list 
 * @param {Number} k item n - k elements deep
 */
function kthToLast(list, k) {
    if (list instanceof DLinkedList && typeof k == 'number') {
        let node = list.tail;
        while(node && k > 0){
            k--;
            node = node.prev;
        }
        return (node) ? node.val : null;
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
console.log(kthToLast(list, 200));