const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

function isPalindrome(list) {
    if (list instanceof LinkedList) {
        let node = list.head;
        c = 0;
        while (node) {
            c++;
            node = node.next;
        }
        let mid = Math.floor(c / 2);
        let midNode = list.head;
        while (mid > 0) {
            mid--;
            midNode = midNode.next;
        }
        let half = Math.floor(c / 2);
        node = list.head;
        while (half) {
            let nodeChecker = midNode;
            let currentChecker = half;
            if (c % 2 == 1) {
                while (currentChecker > 0) {
                    nodeChecker = nodeChecker.next;
                    currentChecker--;
                }
            } else {
                while (currentChecker > 1) {
                    nodeChecker = nodeChecker.next;
                    currentChecker--;
                }
            }
            if (node.val != nodeChecker.val) {
                return false;
            }
            node = node.next;
            half--;
        }
        return true;
    }
}

let list = new LinkedList();
list.add(1).add(3).add(3).add(1);
console.log(isPalindrome(list));