const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

/**
 * Shifts a list by a certain value
 * @param {LinkedList} list 
 * @param {Number} shiftBy 
 */
function shift(list, shiftBy) {
    if (list instanceof LinkedList && typeof shiftBy == 'number') {
        let node1 = list.head;
        let node2 = list.head;
        let lastNode = list.head;
        if (shiftBy >= 0) {
            while (node1) {
                if (shiftBy == 0) {
                    node2 = list.head;
                }
                if (!node1.next) {
                    lastNode = node1;
                }
                shiftBy--;
                node1 = node1.next;
                node2 = node2.next;
            }
        }
        else {
            while (node1) {
                if (shiftBy < 0) {
                    node2 = node2.next;
                }
                if (!node1.next) {
                    lastNode = node1;
                }
                shiftBy++;
                node1 = node1.next;
            }
        }
        let lastFragment = list.head;
        while (lastFragment) {
            if (lastFragment.next == node2) break;
            lastFragment = lastFragment.next;
        }
        let headTemp = list.head;
        lastFragment.next = null;
        list.head = node2;
        lastNode.next = headTemp;
    }
}

let list = new LinkedList();
list.add(1).add(2).add(3).add(4);
console.log(JSON.stringify(list, null, 4));