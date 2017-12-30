function partition(pivot, arr) {
    if (arr instanceof Array && typeof pivot == 'number') {
        let i = arr.length;
        let j = arr.length - 1;
        for (j; j > 0; j--) {
            if (arr[j] < arr[pivot]) {
                i--;
                swap(arr, i, j);
            }
        }
        for (let k = 0; k < i; k++) {
            arr[k] = arr[k + 1];
        }
        arr[i - 1] = arr[pivot];
        return arr;
    }
}

function swap(arr, i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

let arr = [5, 4, 9, 2, 5, 3];
console.log(partition(arr));