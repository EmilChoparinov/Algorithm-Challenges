/**
 * Swaps toward the center but only evens
 * @param {Array} arr an array
 */
function swapTowardCenter(arr) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length / 2; i++) {
            if (i % 2 == 0) {
                let temp = arr[i];
                arr[i] = arr[arr.length - 1 - i];
                arr[arr.length - 1 - i] = temp;
            }
        }
        return arr;
    }
}
console.log(swapTowardCenter([true, 42, 'ada', 2, 'pizza']))
console.log(swapTowardCenter([1, 2, 3, 4, 5, 6]))