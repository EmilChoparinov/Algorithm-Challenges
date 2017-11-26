/**
 * Universally removes any duplicates found in the array O(2n) solution
 * @param {Array} arr 
 */
function removeDuplicates(arr) {
    if (arr instanceof Array) {
        let dict = {};
        let remove = function (index) {
            if (typeof index == 'number') {
                for (let i = index; i < arr.length - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                arr.length--;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in dict) {
                remove(i);
                i -= 1;
            } else {
                dict[arr[i]] = arr[i]
            }
        }
        return arr;
    }
}

console.log(removeDuplicates([1,2,2,3,'hello','hello',5]))