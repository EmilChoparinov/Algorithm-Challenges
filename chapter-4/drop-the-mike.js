function dropTheMike(str) {
    if (typeof str == 'string') {
        let removeSpaces = function (str) {
            if (typeof str == 'string') {
                let s = '';
                let start = 0;
                let end = str.length - 1;
                while (str[start] == ' ') start++;
                while (str[end] == ' ') end--;
                for (let i = start; i <= end; i++) {
                    s += str[i];
                }
                return s;
            }
        }
        let getLastK = function (k, str) {
            if(typeof k == 'number' && typeof str == 'string'){
                let s = '';
                for(let i = str.length-k; i < str.length; i++) s += str[i];
                return s;
            }
        }
        let mike = 'mike';
        let s = '';
        str = removeSpaces(str);
        s += str[0].toUpperCase();
        for (let i = 1; i < str.length; i++) {
            if (str[i-1] == ' ') s += str[i].toUpperCase();
            else s += str[i];
            if (getLastK(4, s).toLowerCase() == 'mike') return "stunned silence";
        }
        return s;
    }
}

console.log(dropTheMike("  hello my name is ike a "));
console.log(dropTheMike("  hello my name is mike a "));
console.log(dropTheMike("mike a "));