/**
 * Duplicates the array. O(n/2) solution
 * @param {Array} arr 
 */
function doubleTrouble(arr) {
    if (arr instanceof Array) {
        arr.length *= 2;
        for (var i = arr.length - 1; i >= 0; i -= 2) {
            arr[i] = arr[1 / 2 * (i - 1)];
            arr[i - 1] = arr[1 / 2 * (i - 1)];
        }
        return arr;
    }
}