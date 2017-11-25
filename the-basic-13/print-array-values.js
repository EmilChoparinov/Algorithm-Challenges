/**
 * Prints all values in an array
 * @param {Array} arr array to iterate through
 */
function printArrayVals(arr){
    if(arr instanceof Array){
        arr.forEach(function(e){
            console.log(e)
        })
    }
}

printArrayVals([1,2,3,4,5,,513,412,123,6,52])