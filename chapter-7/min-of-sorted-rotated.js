/**
 * log(n) solution for finding min of rotated array
 * @param {Array} arr 
 */
function minOfSortedRotated(arr) {
    if (arr instanceof Array) {
        let l = 0;
        let r = arr.length - 1;
        while (l < r) {
            let midIndex = Math.floor((r + l) / 2 + 1);
            if (arr[midIndex + 1] < arr[midIndex]) return arr[midIndex + 1];
            if (arr[midIndex + 1] > arr[midIndex] && arr[l] < arr[r]) {
                l = midIndex + 1;
            }
            else {
                r = midIndex - 1;
            }
        }
        return -1;
    }
}

var x = [8, 9, 10, 11, 2, 3, 4, 5, 6, 7]
var y = [6, 7, 8, 9, 10, 11, 3, 4, 5];
console.log(minOfSortedRotated(x));
console.log(minOfSortedRotated(y));