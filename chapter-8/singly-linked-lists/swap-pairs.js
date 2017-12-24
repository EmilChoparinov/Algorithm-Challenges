const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

/**
 * Swaps items in list by pairs
 * @param {LinkedList} list 
 */
function swapPairs(list) {
    if (list instanceof LinkedList) {
        let currentNode = list.head;
        if (currentNode) {
            let afterNode = currentNode.next;
            list.head = afterNode;
            while (afterNode) {
                let tempNode = afterNode.next;
                afterNode.next = currentNode;
                if (tempNode) {
                    //special k value is for if list turns out to end with odd items
                    let k = currentNode;
                    currentNode.next = tempNode.next;
                    currentNode = tempNode;
                    afterNode = tempNode.next;
                    if (!afterNode) {
                        k.next = currentNode;
                        break;
                    }
                } else {
                    currentNode.next = null;
                    break;
                }
            }
        }
        return list;
    }
}

let list = new LinkedList();
list.add("a").add("b").add("c").add("d");
console.log(swapPairs(list).toString());