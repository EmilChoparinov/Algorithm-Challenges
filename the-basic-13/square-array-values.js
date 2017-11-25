/**
 * Squares all values in an array
 * @param {Array|Number} arr an array of numbers
 */
function squareArrayVals(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            arr[i] *= 2;
        }
        return arr;
    }
}

console.log(squareArrayVals([1,2,3,4,5]))