/**
 * Insert a value at the beginning of the array
 * @param {Array} arr an array
 * @param {Object} val element to be inserted
 */
function pushFront(arr, val){
    if(arr instanceof Array){
        arr.length++;
        for(let i = arr.length - 1; i > 0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = val;
        return arr;
    }
}

console.log(pushFront([1,2,3,4], 5))