/**
 * Doubles each value in the given array and returns a new array with such values
 * @param {Array} arr an array
 */
function doubleVision(arr){
    if(arr instanceof Array){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            newArr.push(arr[i] * 2);
        }
        return newArr;
    }
}

console.log(doubleVision([1,2,3,4,5]))