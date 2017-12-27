function encodeStr(str) {
    if (typeof str == 'string') {
        let s = "";
        let c = 0;
        let lastChar = str[0];
        for (let i = 0; i < str.length; i++) {
            if (str[i] != lastChar) {
                s += lastChar + c;
                lastChar = str[i];
                c = 1;
            } else {
                c++;
            }
        }
        s += lastChar + c;
        return (s.length < str.length) ? s : str;
    }
}

console.log(encodeStr("aaaabbcddd"));
console.log(encodeStr("bb"));