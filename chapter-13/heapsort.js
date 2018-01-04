const testSort = require("../chapter-12/sort-tester");
const reference = require("./heap");
var Heap = reference.Heap;
function heapSort(arr) {
    let h = new Heap();
    h.addValues(arr);
    for (let i = 0; i < arr.length; i++) arr[i] = h.extract();
    return arr;
}

testSort("array", heapSort);