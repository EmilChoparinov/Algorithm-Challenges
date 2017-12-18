/**
 * O(2n) solution for finding the missing value of an array of numbers
 * constraints: must be only one number
 * @param {Array} arr 
 */
function missingValue(arr) {
    if (arr instanceof Array) {
        let max = arr[0];
        let min = arr[0];
        let sum = 0;
        arr.forEach(e => {
            if (max < e) max = e;
            if (min > e) min = e;
            sum += e;
        });

        let realSum = 0;
        for (let i = min; i <= max; i++) realSum += i;
        return realSum - sum;
    }
}

let x = [2, -4, 0, -3, -2, 1];
let y = [5, 2, 7, 8, 4, 9, 3];
console.log(missingValue(x));