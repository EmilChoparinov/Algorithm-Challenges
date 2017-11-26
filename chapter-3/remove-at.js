/**
 * Removes an element at the specified index
 * @param {Array} arr 
 * @param {Number} index index of the element to be removed
 */
function removeAt(arr, index, val) {
    if (arr instanceof Array && typeof index == 'number') {
        let rVal = arr[index];
        for(let i = index; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr.length--;
        console.log(arr);
        return rVal;
    }
}

console.log(removeAt([1,24,6,2,6,8,23,12], 5))