/**
 * Returns an array with all values transformed to negative
 * @param {Array} arr an array of numbers
 */
function makeArrNegative(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 0 && typeof arr[i] == 'number'){
                arr[i] *= -1;
            }
        }
        return arr;
    }
}

console.log(makeArrNegative([1,-3, 5, 'hello']))