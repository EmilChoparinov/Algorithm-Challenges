/**
 * print values that are greater than an arrays 2nd value. Return how many of these values exist
 * @param {Array|Number} arr an array of numbers
 */
function valuesGreaterThanSecondGen(arr) {
    if (arr instanceof Array) {
        let c = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[1]){
                console.log(arr[i])
                c++;
            }
        }
        return c;
    }
    return null;
}

console.log(valuesGreaterThanSecondGen([1]))