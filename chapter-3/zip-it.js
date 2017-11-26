/**
 * iterates through both arrays and fills arr1 with the values of arr2, swaping by binary. Solution is O((n/2)^2+n)
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function zipIt(arr1, arr2) {
    let addValueAt = function (arr, index, val) {
        if (arr instanceof Array && typeof index == 'number') {
            arr.length++;
            for (let i = arr.length - 1; i > index; i--) {
                arr[i] = arr[i - 1];
            }
            arr[index] = val;
            return arr;
        }
    }
    let n = 0;
    for(let i = 1; i < arr1.length; i++){
        addValueAt(arr1, i, arr2[n])
        i++;
        n++;
    }
    for(let i = n; i < arr2.length; i++){
        arr1[arr1.length] = arr2[i];
    }
    return n;
}

console.log(zipIt([1,2], [10,20,30,40]))