const reference = require("./reference-class");
const validity = require("./is-valid");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;
let loopify = validity.loopify;

/**
 * repairs the list
 * @param {DLinkedList} list 
 */
function repair(list) {
    if(list instanceof DLinkedList){
        if(list.tail){
            if(list.tail.next){
                list.tail.next = null;
            }
        }
        let node = list.head;
        while(node){
            if(node.next == node.prev){
                node.next = null;
            }
            node = node.next;
        }
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
loopify(list, 1);
repair(list);
console.log(list.toString());