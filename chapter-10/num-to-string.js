function numToString(num) {
    if (typeof num == 'number' || typeof num == 'decimal') {
        let s = "";
        let p = -1;
        if (Math.floor(num) != num) {
            while (Math.floor(num) != num) {
                num *= 10;
                p++;
            }
        }
        while (num != 0) {
            let k = num % 10;
            s += k;
            num = Math.floor(num / 10);
        }
        let k = "";
        for (let i = s.length - 1; i >= 0; i--) {
            if(i == p && p != -1) k+= ".";
            k += s[i];
        }
        return k;
    }
}

console.log(numToString(1234.123122));
// console.log(typeof 1.01);