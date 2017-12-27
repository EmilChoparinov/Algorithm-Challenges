function stringToWordArray(str) {
    if (typeof str == "string") {
        let arr = [];
        let tempS = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                arr.push(tempS);
                tempS = "";
            } else {
                tempS += str[i];
            }
        }
        arr.push(tempS);
        return arr;
    }
    return null;
}

let s = "Life is not a drill!";
console.log(stringToWordArray(s));