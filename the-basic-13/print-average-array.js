/**
 * Finds and prints the average of the array
 * @param {Array} arr an array of numbers
 */
function printAveargeOfArray(arr){
    if(arr instanceof Array){
        let sum = 0;
        arr.forEach(function(e){
            sum += e;
        })
        console.log(`the average of this array is ${sum/arr.length}`)
    }
}

printAveargeOfArray([1,2,3,4,5])