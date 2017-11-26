/**
 * Removes elements from a specified range O(n) solution
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 */
function removeRange(arr, start, end){
    if(
        arr instanceof Array &&
        typeof start == 'number' &&
        typeof end == 'number'
    ){
        let len = arr.length; 
        for(let i = start; i < len; i++){
            arr[i] = arr[i+(end-start)+1];
        }
        arr.length -= (end-start) + 1;
        return arr;
    }
}

console.log(removeRange([20,30,40,50,60,70, 80, 90, 100], 0,7))