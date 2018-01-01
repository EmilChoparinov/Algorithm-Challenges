const testSort = require("./sort-tester");
const reference = require("../chapter-6/linked-list-queue/base-class");
let Queue = reference.Queue;
let Node = reference.Node;

function radixSort(arr) {
    if (arr instanceof Array) {
        let decimals = generateDecimalLists();
        let n = 10;
        let m = 1;
        let max = getMax(arr);
        while (max != 0) {
            arr.forEach(v => {
                let d = v % n;
                d /= m;
                d = Math.trunc(d);
                decimals[d].enqueue(v);
            });
            let c = 0;
            decimals.forEach(dec => {
                while (dec.head) {
                    arr[c] = dec.dequeue().val;
                    c++;
                };
            });
            n *= 10;
            m *= 10;
            max = Math.trunc(max / 10);
        }
        return arr;
    }
}

function getMax(arr) {
    if (arr instanceof Array) {
        let m = arr[0];
        arr.forEach(v => {
            if (m < v) m = v
        });
        return m;
    }
}

function generateDecimalLists() {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
        arr.push(new Queue());
    }
    return arr;
}

testSort('array', radixSort);