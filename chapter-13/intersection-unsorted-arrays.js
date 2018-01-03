function intersectionUnsortedArrays(a, b) {
    if (a instanceof Array && b instanceof Array) {
        let ai = b.length, arr = [];
        while (a.length != 0) b.push(a.pop());
        let be = ai;
        while (ai < b.length) {
            let occurance = b[ai];
            let cA = 0;
            for (let i = ai; i < b.length; i++) {
                if (b[i] == occurance) cA++;
            }
            let cB = 0;
            for (let i = 0; i < be; i++) {
                if (b[i] == occurance) cB++;
            }
            if (cA <= cB) arr.push(occurance);
            ai++;
        }
        return arr;
    }
}

console.log(intersectionUnsortedArrays([6, 7, 2, 7, 6, 2], [2, 7, 2, 1, 2]));