/**
 * A function that prints the lowest value in the array and returns the highest value in the array
 * @param {Array} arr an array
 */
function printLowReturnHigh(arr){
    if(arr instanceof Array){
        let lowestNum = arr[0];
        let highestNum = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(lowestNum > arr[i]) lowestNum = arr[i];
            if(highestNum < arr[i]) highestNum = arr[i];
        }
        console.log(lowestNum);
        return highestNum;
    }
    return null;
}

console.log(printLowReturnHigh([1,-6,3,45,8,6,4,4]))