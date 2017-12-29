const testSort = require("./sort-tester");

function bubbleSort(arr) {
    if (arr instanceof Array) {
        let aNumberMoved = false;
        do {
            aNumberMoved = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let t = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = t;
                    aNumberMoved = true;
                }
            }
        } while (aNumberMoved);
        return arr;
    }
}

testSort('array', bubbleSort);