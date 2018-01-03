function isSubsetSorted(a, b) {
    if (a instanceof Array && b instanceof Array) {
        let subFirstI = binaryIndex(a, b[0]);
        let subLastI = binaryIndex(a, b[b.length - 1]);
        if (subFirstI == -1 && subLastI == -1 && subLastI < subFirstI) {
            return false;
        }
        for (let i = subFirstI; i < subLastI; i++) {
            if (a[i] != b[i - subFirstI]) return false;
        }
        return true;
    }
}

function binaryIndex(arr, val, start = 0, end = arr.length) {
    if (arr instanceof Array) {
        if (start >= end) return -1;
        let mid = Math.trunc((end - start) / 2);
        if (val == arr[mid]) return mid;
        if (val > arr[mid]) return binaryIndex(arr, val, mid + 1, end);
        if (val < arr[mid]) return binaryIndex(arr, val, start, mid);
    }
}

console.log(isSubsetSorted([1, 4, 7, 9, 10, 14], [4, 3, 9]))