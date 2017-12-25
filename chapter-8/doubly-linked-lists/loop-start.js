const reference = require("./reference-class");
const validity = require("./is-valid");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;
let loopify = validity.loopify;

/**
 * finds the start of looped list loop
 * @param {DLinkedList} list 
 */
function loopStart(list) {
    if (list instanceof DLinkedList) {
        if (list.tail) {
            if (list.tail.next) {
                return list.tail.next.val;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}

let list = new DLinkedList();
list.push("a").push("b").push("c").push("d");
loopify(list, 1);
console.log(loopStart(list));