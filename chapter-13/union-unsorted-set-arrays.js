function unionSetUnsorted(a, b) {
    if (a instanceof Array && b instanceof Array) {
        let ai = 0, bi = 0, arr = [];
        while (ai < a.length && bi < b.length) {
            if (a[ai] == b[bi]) {
                if (!contains(arr, a[ai])) {
                    arr.push(a[ai]);
                }
            } else {
                if (!contains(arr, a[ai])) {
                    arr.push(a[ai]);
                }
                if (!contains(arr, b[bi])) {
                    arr.push(b[bi]);
                }
            }
            ai++;
            bi++;
        }
        return arr;
    }
}

function contains(arr, v) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == v) return true;
        }
        return false;
    }
}

console.log(unionSetUnsorted([2, 7, 2, 1], [6, 7, 2, 6]));