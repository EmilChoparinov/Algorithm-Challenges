/**
 * Given an array of numbers, this function replaces the last value with the total number of postivie values this array has
 * @param {Array} arr an array
 */
function countPositives(arr){
    if(arr instanceof Array){
        let c = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 0){
                c++;
            }
        }
        arr[arr.length - 1] = c;
        return arr;
    }
}

console.log(countPositives([-1,1,1,1]))