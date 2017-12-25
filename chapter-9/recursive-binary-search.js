/**
 * binary search recursively by array
 * @param {Array} arr 
 * @param {Number} val 
 */
function rBinarySearch(arr, val) {
    let mid = arr[Math.floor(arr.length / 2)];
    if (mid == val) return true;
    if (arr.length == 1) return false;
    if (val > mid) return rBinarySearch(arr.slice(arr.length / 2 + 1, arr.length), val);
    if(val < mid) return rBinarySearch(arr.slice(0, arr.length/2), val);
}

console.log(rBinarySearch([1,3,4,6], -1), rBinarySearch([4,5,6,8,12], 5))