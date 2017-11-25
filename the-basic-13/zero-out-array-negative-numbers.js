/**
 * Sets all numbers under 0 to 0
 * @param {Array|Number} arr an array of numbers
 */
function zeroOutArrayNegativeVals(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < 0) arr[i] = 0;
        }
        return arr;
    }
}

console.log(zeroOutArrayNegativeVals([1,2,3,4,-1,-2,-3,-4]))