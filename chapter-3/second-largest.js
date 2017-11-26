/**
 * Finds the second max
 * @param {Array|Number} arr an array of numbers
 */
function secondLargest(arr) {
    if (arr instanceof Array) {
        let max = [arr[0],0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > max[0]){
                max[0] = arr[i];
                max[1] = i;
            } 
        }
        arr[max[1]] = null;
        let nextMax = arr[0];
        for(let i = 0; i < arr.length; i++){
            if(max[0] - arr[i] < max[0] - nextMax && arr[i] != max[0]){
                nextMax = arr[i];
            }
        }
        return nextMax;
    }
}

console.log(secondLargest([1, 42, 4, Math.PI, 7]))