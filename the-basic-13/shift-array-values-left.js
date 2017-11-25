/**
 * Shifts all array values to the left 
 * @param {Array} arr shifts array values to the left
 */
function shiftArrayValsLeft(arr){
    if(arr instanceof Array){
        let lastNum = arr[arr.length - 1]
        for(let i = arr.length - 1; i > 0; i--){
            let curNum = arr[i-1];
            arr[i-1] = lastNum;
            lastNum = curNum;
        }
        arr[arr.length-1] = 0;
        return arr;
    }
}

console.log(shiftArrayValsLeft([12,123,5,2,3,5,1]))