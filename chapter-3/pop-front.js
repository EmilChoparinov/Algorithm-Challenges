/**
 * Pops the first element of the array
 * @param {Array} arr an array
 * @returns {Any} first element of the array
 */
function popFront(arr){
    if(arr instanceof Array){
        let rVal = arr[0];
        for(let i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr.length--;
        return rVal;
    }
}

console.log(popFront([1,2,3,4,5]))