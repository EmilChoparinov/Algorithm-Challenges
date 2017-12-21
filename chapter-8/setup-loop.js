const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

function setupLoop(total, loopStart) {
    if (typeof total == 'number' && typeof loopStart == 'number' && total >= loopStart) {
        let list = new LinkedList();
        let loopStartPointer = null;
        for (let i = 1; i <= total; i++) {
            list.add(i);
        }
        let node = list.head;
        let c = 1;
        while (node) {
            if (c == loopStart) {
                loopStartPointer = node;
            }
            if (!node.next) break;
            c++;
            node = node.next;
        }
        node.next = loopStartPointer;
        return list;
    }
}

function toStringFirstNofList(list, n) {
    if (list instanceof LinkedList && typeof n == 'number') {
        let s = "[ ";
        let node = list.head;
        if (node) {
            for (let i = 0; i < n - 1; i++) {
                if (!node.next) break;
                s += node.val + ", ";
                node = node.next;
            }
            s += node.val;
        }
        s += " ]";
        return s;
    }
}

let list = setupLoop(5, 3);
console.log(toStringFirstNofList(list, 40));