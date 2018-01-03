function unionUnsortedArrays(a, b) {
    if (a instanceof Array && b instanceof Array) {
        let s = a.length;
        b.forEach(v => {
            let count = getCount(a, v, s);
            for (let i = 0; i < count; i++) {
                b.push(v);
            }
        })
        a.forEach(v => {
            let count = getCount(b, v, s);
            if (count == -1) b.push(v);
        });
        return b;
    }
}

function getCount(arr, val, s) {
    if (arr instanceof Array) {
        let c = -1;
        for (let i = 0; i < s; i++) {
            if (arr[i] == val) c++;
        }
        return c;
    }
}

console.log(unionUnsortedArrays([6, 7, 2, 6], [2, 7, 2, 1]));