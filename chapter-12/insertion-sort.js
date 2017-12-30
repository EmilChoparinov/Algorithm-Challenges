const testSort = require("./sort-tester");

function insertionSort(arr) {
    if (arr instanceof Array) {
        let hasChanged;
        for (let sortedToIndex = 0; sortedToIndex < arr.length; sortedToIndex++) {
            for (let i = 0; i < sortedToIndex; i++) {
                if (arr[sortedToIndex] < arr[i]) {
                    swap(arr, sortedToIndex, i);
                }
            }
        }
        return arr;
    }
}

function swap(arr, place1, place2) {
    if (arr instanceof Array && typeof place1 == 'number' && typeof place2 == 'number') {
        let t = arr[place1];
        arr[place1] = arr[place2];
        arr[place2] = t;
    }
}

testSort('array', insertionSort);