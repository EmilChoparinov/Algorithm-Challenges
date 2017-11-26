/**
 * removes negatives from an array of number O(n) not in place
 * @param {Array|Number} arr an array of numbers
 */
function removeNegatives(arr){
    if(arr instanceof Array){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 0){
                newArr.length++;
                newArr[newArr.length - 1] = arr[i];
            }
        }
        return newArr;
    }
}

var array = [1,2,3,4,5,6,7,-1,-2,-3,8,9,-10,10]
array = removeNegatives(array);
console.log(array)