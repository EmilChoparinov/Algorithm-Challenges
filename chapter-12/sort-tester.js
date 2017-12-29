const reference = require("../chapter-8/singly-linked-lists/reference-class");
var Node = reference.Node;
var LinkedList = reference.LinkedList;

let arrays = [
    [1, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48],
    [87, 97, 70, 93, 97, 78, 85, 20, 9, 77, 68, 93, 58, 34, 51],
    [88, 37, 91, 31, 13, 62, 64, 58, 93, 92, 33, 1, 75, 59, 15],
    [49, 77, 35, 84, 100, 36, 42, 30, 50, 28, 25, 95, 4, 63, 49],
    [96, 53, 99, 100, 33, 51, 76, 9, 29, 89, 31, 91, 30, 94, 90]
];

/**
 * tests a sort
 * @param {String} sortType linked | array
 * @param {*} callback algorithim to test
 */
module.exports = function testSort(sortType, callback) {
    let attempts = [];
    if (sortType == 'linked') {
        let linkedLists = [];
        arrays.forEach(array => {
            let list = new LinkedList();
            array.forEach(value => list.add(value));
            attempts.push(callback(list));
            linkedLists.push(list);
        });
        attempts.forEach(attempt => {
            if (attempt instanceof LinkedList) {
                console.log("currently attempting... ", attempt.toString());
                let node1 = attempt.head;
                if (node1) {
                    let node2 = node1.next;
                    while (node2) {
                        if (node1.val > node2.val) {
                            console.log(`FAIL @ ${node1.val} -> ${node2.val}`);
                            return;
                        }
                        node1 = node1.next;
                        node2 = node2.next;
                    }
                }
                console.log("SUCCESS");
            }
        });
    }
    if (sortType == 'array') {
        arrays.forEach(array => attempts.push(callback(array)));
        attempts.forEach(attempt => {
            console.log("currently attempting... ", attempt);
            for (let i = 0; i < attempt.length - 1; i++) {
                if (attempt[i] > attempt[i + 1]) {
                    console.log(`FAIL @ ${attempt[i]} -> ${attempt[i + 1]}`);
                    return;
                }
            };
            console.log("SUCCESS");
        });
    }
}