/**
 * Grab the last few elements of the array from arr.length to arr.length - num
 * @param {Array} arr an array
 * @param {Number} num the new length of the array
 */
function shortArray(arr, num){
    if(arr instanceof Array){
        let byI = 0;
        if(num > arr.length) return;
        for(let i = arr.length-num; i < arr.length; i++){
            arr[byI] = arr[i]
            byI++;
        }
        arr.length = num;
        return arr;
    }
}

console.log(shortArray([2,4,6,8,10], 20))