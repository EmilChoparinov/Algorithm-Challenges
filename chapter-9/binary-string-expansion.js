function bse(str, arr = []) {
    if (typeof str == 'string') {
        let indx = str.indexOf("?");
        if(indx == -1) return arr.push(str);
        bse(str.slice(0, indx) + "1" + str.slice(indx+1, str.length), arr);
        bse(str.slice(0, indx) + "0" + str.slice(indx+1, str.length), arr);
        return arr;
    }
}

console.log(bse("1?0?"));