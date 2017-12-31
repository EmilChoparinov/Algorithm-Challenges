const testSort = require("./sort-tester");

function pancakeSort(arr) {
    if (arr instanceof Array) {
        for (let i = arr.length - 1; i > 0; i--) {
            var max = 0;
            for (let j = 1; j <= i; j++) {
                if (arr[max] < arr[j]) {
                    max = j;
                }
            }
            if (max != i) {
                let t = arr.slice(0, max + 1).reverse();
                for (let k = 0; k < max + 1; k++) {
                    arr[k] = t[k];
                }

                let finishingFlip = arr.slice(0, i + 1).reverse();
                for (let k = 0; k <= i; k++) {
                    arr[k] = finishingFlip[k];
                }
            }
        }
        return arr;
    }
}

testSort('array', pancakeSort);