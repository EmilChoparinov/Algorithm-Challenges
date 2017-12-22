const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

/**
 * flattens a screwed up linked list practically
 * new node not implemented
 * @param {LinkedList} list 
 * @param {[Node]} node 
 */
function flatten(list, node = list.head) {
    if (list instanceof LinkedList) {
        if (node) {
            if (!node.next) {
                return node;
            }
            if (node.child) {
                let lastP = flatten(list, node.child);
                let t = node.next;
                node.next = node.child;
                lastP.next = t;
            }
            return flatten(list, node.next);
        }
    }
    return list;
}