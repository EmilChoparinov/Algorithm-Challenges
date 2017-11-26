/**
 * Returns the second to last number in an array
 * @param {Array} arr
 */
function secondToLast(arr){
    if(arr instanceof Array){
        if(arr.length < 3) return null;
        return arr[arr.length - 2];
    }
}

console.log(secondToLast([1,2,3]))