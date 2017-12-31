const testSort = require("./sort-tester");

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    let index = partition(arr, left, right);
    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.round(Math.random() * (arr.length - 1))];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

testSort('array', quicksort);