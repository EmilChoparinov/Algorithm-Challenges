/**
 * Finds all values in arr greater than y
 * @param {Array|Number} arr an array of integers
 * @param {Number} y the condition that will determine which numbers to print
 */
function returnArrayCountGreaterThanY(arr, y){
    if(arr instanceof Array && typeof y == 'number'){
        arr.forEach(function(e){
            if(e > y){
                console.log(e)
            }
        })
    }
}

returnArrayCountGreaterThanY([1,2,3,4,5,6,7,8,9,10], 3)