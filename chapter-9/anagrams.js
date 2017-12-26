function buildAnagrams(str, curStr = "", arr = []) {
    if (typeof str == 'string') {
        if (str.length == 0) arr.push(curStr);
        for (let i = 0; i < str.length; i++) {
            buildAnagrams(str.slice(0, i) + str.slice(i + 1, str.length), curStr + str.charAt(i), arr);
        }
        return arr;
    }
}

console.log(buildAnagrams("lim"));