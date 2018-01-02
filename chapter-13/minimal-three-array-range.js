function minimalThreeArrayRange(arr1, arr2, arr3) {
    if (arr1 instanceof Array && arr2 instanceof Array && arr3 instanceof Array) {
        let arrays = [arr1, arr2, arr3];
        let firstMax = arrays[0][0], secondMax;
        arrays.forEach(array => {
            if (array[0] > firstMax) {
                secondMax = firstMax;
                firstMax = array[0];
            };
        });
        return { min: secondMax, max: firstMax };
    }
}

let arr1 = [1, 2, 4, 15], arr2 = [3, 10, 12], arr3 = [5, 10, 13, 17, 23];
console.log(minimalThreeArrayRange(arr1, arr2, arr3));