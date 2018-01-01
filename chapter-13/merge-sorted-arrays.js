function merge(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let arr = [];
        let i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                arr.push(arr1[i]);
                i++;
            } else {
                arr.push(arr2[j]);
                j++;
            }
        }

        let leftOvers = (i < arr1.length) ? arr1 : arr2;
        let k = (i < arr1.length) ? i : j;
        for (k; k < leftOvers.length; k++) {
            arr.push(leftOvers[k]);
        }
        return arr;
    }
}

let arr1 = [1, 2, 2, 2, 7];
let arr2 = [2, 2, 6, 6, 7, 9];

console.log(merge(arr1, arr2));