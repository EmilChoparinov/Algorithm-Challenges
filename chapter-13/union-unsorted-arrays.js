function unionUnsortedArrays(a, b) {
    if (a instanceof Array && b instanceof Array) {
        let ai = 0, bi = 0, arr = [];
        while (ai < a.length && bi < b.length) {
            if (a[ai] == b[bi]) {
                arr.push(a[ai]);
            } else {
                arr.push(a[ai]);
                arr.push(b[bi]);
            }
            ai++;
            bi++;
        }
        let last = (ai < a.length) ? a : b;
        let lastI = (ai < a.length) ? ai : bi;
        for (lastI; lastI < last.length; lastI++) {
            arr.push(last[lastI]);
        }
        return arr;
    }
}

console.log(unionUnsortedArrays([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 9]));