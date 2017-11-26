/**
 * Inserts an element at the specified index in the specified array
 * @param {Array} arr
 * @param {Number} index 
 * @param {Any} val value to be inserted
 * @returns {Array} the modified array
 */
function insertAt(arr, index, val) {
    if (arr instanceof Array && typeof index == 'number') {
        arr.length++;
        for(let i = arr.length - 1; i > index; i--){
            arr[i] = arr[i-1];
        }
        arr[index] = val;
        return arr;
    }
}

console.log(insertAt([1,24,6,2,6,8,23,12], 5, 100))