/**
 * A function that prints the second to last value in the array and returns the first odd value in the array
 * @param {Array} arr an array
 */
function printOneReturnAnother(arr){
    if(arr instanceof Array){
        console.log(arr[arr.length - 2])
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 != 0){
                return arr[i]
            }
        }
    }
    return null;
}

console.log(printOneReturnAnother([0,2,3,4,5,12,312,3,5,123]))