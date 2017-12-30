const testSort = require("./sort-tester");

function mergeSort(arr) {
    if (arr instanceof Array) {
        if (arr.length == 1) return arr;
        let f = mergeSort(arr.slice(0, arr.length / 2));
        let s = mergeSort(arr.slice(arr.length / 2, arr.length));
        combineTo(arr, f, s);
        return arr;
    }
}

function combineTo(arr, arr1, arr2) {
    if (arr instanceof Array && arr1 instanceof Array && arr2 instanceof Array) {
        let i = 0, j = 0, c = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                arr[c] = arr1[i];
                i++;
            } else {
                arr[c] = arr2[j];
                j++;
            }
            c++;
        }
        let arrNotFinished = (i < arr1.length) ? arr1 : arr2;
        let countNotFinished = (i < arr1.length) ? i : j;
        for (countNotFinished; countNotFinished < arrNotFinished.length; countNotFinished++) {
            arr[c] = arrNotFinished[countNotFinished];
            c++;
        }
        return arr;
    }
}

testSort('array', mergeSort)