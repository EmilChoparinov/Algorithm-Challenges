/**
 * Replace each string with a number which is the length of the string at the previous array index
 * @param {Array|String} arr an array of strings
 */
function previousLengths(arr){
    if(arr instanceof Array){
        for(let i = 1; i < arr.length; i++){
            if(typeof arr[i] == 'string'){
                arr[i-1] = arr[i].length;
            }
        }
    }
    return arr;
}

console.log(previousLengths(['a', 2, 'abc','abcd']))