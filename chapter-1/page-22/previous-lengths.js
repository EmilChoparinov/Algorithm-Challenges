/**
 * Replace each string with a number which is the length of the string at the previous array index
 * @param {Array|String} arr an array of strings
 */
function previousLengths(arr) {
    if (arr instanceof Array) {
        let lastStr = arr[0];
        for (let i = 1; i < arr.length; i++) {
            let curStr = arr[i];
            arr[i] = lastStr.length;     
            lastStr = curStr;   
        }
    }
    return arr;
}

console.log(previousLengths(['a', 'ab', 'abc', 'abcd']))