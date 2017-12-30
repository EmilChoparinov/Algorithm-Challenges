function combine(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let arr1Index = 0;
        let arr2Index = 0;
        let combined = [];
        while (arr1Index < arr1.length && arr2Index < arr2.length) {
            if (arr1[arr1Index] < arr2[arr2Index]) {
                combined.push(arr1[arr1Index]);
                arr1Index++;
            } else {
                combined.push(arr2[arr2Index]);
                arr2Index++;
            }
        }
        let lastIndex;
        let lastValues;
        if (arr1.length > arr2.length) {
            lastIndex = arr2Index;
            lastValues = arr2;
        } else {
            lastIndex = arr1Index;
            lastValues = arr1;
        }
        for (let i = lastIndex; i < lastValues.length; i++) {
            combined.push(lastValues[i]);
        }
        return combined;
    }
}

let arr1 = [1, 6, 8, 10];
let arr2 = [2, 4, 5, 7, 9];
console.log(combine(arr1, arr2));