const reference = require("./reference-class");
let Node = reference.Node;
let DLinkedList = reference.DLinkedList;

/**
 * validates a list
 * checks if prev and next pointers are not pointing to the same item
 * checks if there is no loop in the list
 * @param {DLinkedList} list 
 */
function isValid(list) {
    if (list instanceof DLinkedList) {
        let node = list.head;
        if(node){
            let nodeD = node.next;
            while (nodeD) {
                if (node.next == node.prev) return false;
                if (nodeD == node) return false;
                node = node.next;
                nodeD = nodeD.next;
                if (nodeD) nodeD = nodeD.next;
            }
        }
        return true;
    }
}

/**
 * turns a doubly/singly linked list into a loopy list 
 * @param {DLinkedList} list 
 * @param {Number} n nodes deep where loop starts
 */
function loopify(list, n) {
    if (list instanceof DLinkedList) {
        let startNode = list.head;
        while (startNode && n > 0) {
            n--;
            startNode = startNode.next;
        }
        if (startNode) {
            let endNode = startNode;
            while (endNode) {
                if(!endNode.next) break;
                endNode = endNode.next;
            }
            endNode.next = startNode;
        }
    }
}

// let list = new DLinkedList();
// list.push("a").push("b").push("c").push("d");
// console.log(isValid(list));
// loopify(list, 0);
// console.log(isValid(list));

module.exports = {
    loopify : loopify
}