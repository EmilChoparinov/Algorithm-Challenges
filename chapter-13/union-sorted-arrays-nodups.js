function unionSortedArrays(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let i = 0, j = 0, arr = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                if (arr[arr.length - 1] != arr1[i]) {
                    arr.push(arr1[i]);
                }
                i++;
            }
            else if (arr1[i] == arr2[j]) {
                if (arr[arr.length - 1] != arr1[i]) {
                    arr.push(arr1[i]);
                }
                i++;
                j++;
            }
            else if (arr1[i] > arr2[j]) {
                if (arr[arr.length - 1] != arr2[j]) {
                    arr.push(arr2[j]);
                }
                j++;
            }
        }
        let last = (i < arr1.length) ? arr1 : arr2;
        let lastI = (i < arr1.length) ? i : j;
        for (lastI; lastI < last.length; lastI++) {
            arr.push(last[lastI]);
        }
        return arr;
    }
}

console.log(unionSortedArrays([1, 2, 2, 2, 7], [2, 6, 6, 7]));