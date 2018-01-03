function subsetUnsortedArrays(a, b) {
    if (a instanceof Array && b instanceof Array) {
        let j = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == b[j]) {
                j++;
            } else {
                j = 0;
            }
            if (j == b.length - 1) return true;
        }
        return false;
    }
}

console.log(subsetUnsortedArrays([4, 1, 9, 7, 10, 14], [1, 8, 7]))