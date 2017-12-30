const testSort = require("./sort-tester");

function insertionSort(arr) {
    if (arr instanceof Array) {
        for (let sortedToIndex = 0; sortedToIndex < arr.length; sortedToIndex++) {
            let t = arr[sortedToIndex];
            let c = sortedToIndex - 1;
            while (c >= 0 && arr[c] > t) {
                arr[c + 1] = arr[c];
                c--;
            }
            arr[c + 1] = t;
        }
        return arr;
    }
}

testSort('array', insertionSort);