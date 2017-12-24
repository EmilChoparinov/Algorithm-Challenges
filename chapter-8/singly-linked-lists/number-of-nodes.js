const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;
const loops = require("./break-loop");

function numberOfNodes(list){
    if(list instanceof LinkedList){
        let node = list.head;
        let c = 0;
        while(node){
            c++;
            node = node.next;
        }
        return c;
    }
}
let list = new LinkedList();
list.add(1).add(2).add(3).add(4)
let node = list.head.next;
let end = list.head;
while (end) {
    if (!end.next) break;
    end = end.next;
}
end.next = node;

loops.breakLoop(list);
console.log(numberOfNodes(list));