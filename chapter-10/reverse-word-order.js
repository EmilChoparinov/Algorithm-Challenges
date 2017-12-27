function reverseWordOrder(str) {
    if (typeof str == 'string') {
        let s = "", currentWord = "";
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] == " ") {
                s += reverse(currentWord) + " ";
                currentWord = "";
            } else {
                currentWord += str[i];
            }
        }
        if (currentWord) s += reverse(currentWord) + " ";
        return s;
    }
}


function reverse(str) {
    if (typeof str == 'string') {
        let s = "";
        for (let i = str.length - 1; i >= 0; i--) s += str[i];
        return s;
    }
}

let s = "This is a test";
console.log(reverseWordOrder(s));