function interleaveArrays(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let arr = [];
        let i = 0;
        while (i < arr1.length && i < arr2.length) {
            arr.push(arr1[i]);
            arr.push(arr2[i]);
            i++;
        }

        let leftOver = (arr1.length > arr2.length) ? arr1 : arr2;
        for (let j = i; j < leftOver.length; j++) {
            arr.push(leftOver[j]);
        }
        return arr;
    }
}

let arr1 = [77, 22, 11, 22];
let arr2 = [2, 6, 7, 2, 6, 2];
console.log(interleaveArrays(arr1, arr2));