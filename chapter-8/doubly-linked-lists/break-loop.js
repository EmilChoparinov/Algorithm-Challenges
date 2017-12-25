const reference = require("./reference-class");
const validity = require("./is-valid");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;
let loopify = validity.loopify;

/**
 * breaks a doubly linked lists loop
 * @param {DLinkedList} list 
 */
function breakLoop(list) {
    if (list instanceof DLinkedList) {
        if(list.tail){
            if(list.tail.next){
                list.tail.next = null;
            }
        }
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
loopify(list, 1);
breakLoop(list);
console.log(list.toString());