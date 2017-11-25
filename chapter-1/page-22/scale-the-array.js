/**
 * Scales the array by a mulitplers
 * @param {Array} arr an array of numbers
 * @param {Number} num a number of which the array should be scaled by
 */
function scaleArray(arr, num){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            arr[i] *= num;
        }
        return arr;
    }
}

console.log(scaleArray([1,2,3,4,5], 3))