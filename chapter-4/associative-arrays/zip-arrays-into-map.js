/**
 * Zips two arrays as maps of each other
 * @param {Array} arr1 Keys
 * @param {Array} arr2 Values
 */
function zip(arr1, arr2){
    if(arr1 instanceof Array && arr2 instanceof Array){
        let map = {};
        let length = (arr1.length <  arr2.length) ? arr1.length : arr2.length;
        for(let i = 0; i < length; i++){
            map[arr1[i]] = arr2[i];
        }
        return map;
    }
}

console.log(zip(["hello", "new one"], [1,2,3]));