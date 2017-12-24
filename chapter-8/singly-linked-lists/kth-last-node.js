const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

function kthLastNode(head, k) {
    if (head instanceof Node && k > 0) {
        let node1 = head;
        let node2 = head;
        while (node1) {
            if (k == 0) {
                node2 = head;
            }
            k--;
            node2 = node2.next;
            node1 = node1.next;
        }
        return node2.val;
    }
}

let list = new LinkedList();
list.add(1).add(2).add(3).add(4);
console.log(kthLastNode(list.head, 1))
console.log(list.toString());