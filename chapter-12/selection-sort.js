const testSort = require("./sort-tester");

function selectionSort(arr) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            let n = getCurMinIndexAfter(arr, i);
            let t = arr[i];
            arr[i] = arr[n];
            arr[n] = t;
        }
        return arr;
    }
}

function getCurMinIndexAfter(arr, n) {
    let curMin = n;
    let curMinVal = arr[n];
    for (let i = n; i < arr.length; i++) {
        if (curMinVal > arr[i]) {
            curMin = i;
            curMinVal = arr[i];
        }
    }
    return curMin;
}

testSort('array', selectionSort);