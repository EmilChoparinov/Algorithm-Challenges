function unionSortedArrays(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let i = 0, j = 0, arr = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                arr.push(arr1[i]);
                i++;
            }
            else if (arr1[i] == arr2[j]) {
                arr.push(arr1[i]);
                i++;
                j++;
            }
            else if (arr1[i] > arr2[j]) {
                arr.push(arr2[j]);
                j++;
            }
        }
        return arr;
    }
}

let arr1 = [1, 2, 2, 2, 7], arr2 = [2, 2, 6, 6, 7];
console.log(unionSortedArrays(arr1, arr2));