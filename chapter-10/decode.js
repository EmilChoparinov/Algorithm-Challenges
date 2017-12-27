function decode(str) {
    if (typeof str == 'string') {
        let s = "";
        for (let i = 0; i < str.length; i += 2) {
            for (let j = 0; j < parseInt(str[i + 1]); j++) {
                s += str[i];
            }
        }
        return s;
    }
}

console.log(decode("a3b2c1d3"));