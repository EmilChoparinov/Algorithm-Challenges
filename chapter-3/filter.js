/**
 * Returns the modified array as an array of numbers between the given bounds
 * @param {Array|Number} arr an array of numbers
 * @param {Number} min left bound
 * @param {Number} max max bound
 */
function filter(arr, min, max) {
    if (arr instanceof Array && typeof min == 'number' && typeof max == 'number') {
        let remove = function (index) {
            for (let i = index; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr.length--;
        }
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < min || arr[i] > max){
                remove(i);
                i--;
            }
        }
        return arr;
    }
}
console.log(filter([1,2,3,4,5,6,7,8,9], 3, 7))