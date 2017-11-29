/**
 * Removes elements from the array that are a length under l
 * @param {Array|String} arr 
 * @param {Number} l length condition
 */
function removeStringsShorterThan(arr, l){
    if(arr instanceof Array && typeof l == 'number'){
        let remove = function (index) {
            if(typeof index == 'number'){
                for(let i = index; i < arr.length; i++){
                    arr[i] = arr[i+1];
                }
                arr.length--;
            }
        }
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length < l){
                remove(i);
                i--;
            }
        }
        return arr;
    }
}

var array = ['abc', 'abcd', 'abcde', 'abcdef', 'abcdefg', 'abcdefgh']
removeStringsShorterThan(array, 6);
console.log(array);