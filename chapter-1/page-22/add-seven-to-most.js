/**
 * Return a new array with all values except first, adding 7 to each
 * @param {Array} arr an array of numbers
 */
function addSevenToMost(arr){
    if(arr instanceof Array){
        let newArr = [];
        for(let i = 1; i < arr.length; i++){
            if(typeof arr[i] == 'number') newArr.push(arr[i]+7);
        }
        return newArr;
    }
}

console.log(addSevenToMost([1,2,3,4,5,6,7]))