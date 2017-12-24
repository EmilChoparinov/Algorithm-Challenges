const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

function isPalindrome(list) {
    if (list instanceof DLinkedList) {
        let hNode = list.head;
        let tNode = list.tail;
        while(hNode != tNode){
            if(hNode.val != tNode.val) return false;
            hNode = hNode.next;
            tNode = tNode.prev;
        }
        return true;
    }
}

let list = new DLinkedList();
let list2 = new DLinkedList();
list.push(0).push(1).push(2).push(2).push(1).push(0);
list2.push(0).push(1).push(2).push(3).push(2).push(1).push(0);
console.log(isPalindrome(list));
console.log(isPalindrome(list2));