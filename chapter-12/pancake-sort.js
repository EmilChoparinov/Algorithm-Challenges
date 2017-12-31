function pancakeSort(arr) {
    if (arr instanceof Array) {
        for (let i = arr.length - 1; i >= 1; i--) {
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
            }
        }
        return arr;
    }
}

let arr = [2, 3, 1, 4];
console.log(pancakeSort(arr));