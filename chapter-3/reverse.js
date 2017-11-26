/**
 * Reverses an array in place
 * @param {Array} arr an array
 * @returns {Array}
 */
function reverseArray(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length/2; i++){
            let temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        return arr;
    }
}

console.log(reverseArray([3,1,6,4,2]))