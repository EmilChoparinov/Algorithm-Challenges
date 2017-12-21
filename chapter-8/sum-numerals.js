const reference = require("./reference-class");
let Node = reference.Node;
let LinkedList = reference.LinkedList;

/**
 * Adds digits in linked list to another linked list domain(0-9)
 * @param {LinkedList} nums1 first list of numbers
 * @param {LinkedList} nums2 second list of numbers
 * @returns {LinkedList}
 */
function sumNumerals(nums1, nums2) {
    if (nums1 instanceof LinkedList && nums2 instanceof LinkedList) {
        let node1 = nums1.head;
        let node2 = nums2.head;
        while (node1 && node2) {
            node2 = node2.next;
            node1 = node1.next;
        }
        let smallestList = (node2) ? nums1 : nums2;
        let bigNode = smallestList.head;
        node1 = nums1.head;
        node2 = nums2.head;
        let sumList = new LinkedList();
        let r = 0;
        while (bigNode) {
            let val = node1.val + node2.val;
            if (val > 9) {
                r = 1;
                sumList.add(val % 10);
            } else {
                sumList.add(val + r);
                r = 0;
            }
            node1 = node1.next;
            node2 = node2.next;
            bigNode = bigNode.next;
        }
        let cNode = null;
        if (smallestList === nums1) {
            cNode = node2;
        } else {
            cNode = node1;
        }
        while (cNode) {
            sumList.add(cNode.val + r);
            r = 0;
            cNode = cNode.next;
        }
        return sumList;
    }
}

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.add(0).add(9).add(1).add(1);
list2.add(0).add(9);
console.log(sumNumerals(list1, list2).toString());