function isPangram(str) {
    if (typeof str == 'string') {
        let set = new Set();
        for (let i = 0; i < str.length; i++) {
            if (str.toLowerCase().charCodeAt(i) >= 97 && str.toLowerCase().charCodeAt(i) <= 122) {
                set.add(str[i]);
            }
        }
        return set.size == 26
    }
}

console.log(isPangram("How quickly daft jumping zebras vex!"));
console.log(isPangram("abcdefghijklmnopqrstuvwxy, not so fast!"));