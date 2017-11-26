function rotateArr(arr, shiftBy) {
    if (arr instanceof Array && typeof shiftBy == 'number') {
        Array.prototype.reverseRange = function (start, end) {
            if (typeof start == 'number' && typeof end == 'number') {
                while (start < end) {
                    let temp = this[start];
                    this[start] = this[end];
                    this[end] = temp;
                    start++;
                    end--;
                }
            }
        }
        if (Math.abs(shiftBy) > arr.length) shiftBy = shiftBy % arr.length;

        let divider;
        if (shiftBy > 0) divider = arr.length - 1 - shiftBy;
        else divider = Math.abs(shiftBy+1);
        
        arr.reverseRange(0, divider);
        arr.reverseRange(divider + 1, arr.length - 1);
        arr.reverseRange(0, arr.length - 1);
        return arr;
    }
}

console.log(rotateArr([1, 2, 3, 4], -1))

console.log(rotateArr([1, 2, 3, 4], 1))