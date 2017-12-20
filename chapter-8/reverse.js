const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

function reverse(head) {
    if (head instanceof Node) {
        let buck = [];
        let node = head;
        while (node) {
            buck.push(node.val);
            node = node.next;
        }
        node = head;
        while (buck.length) {
            node.val = buck.pop();
            node = node.next;
        }
    }
}

let list = new LinkedList();
list.add(1).add(2).add(3).add(4);

reverse(list.head);
console.log(list.toString());