/**
 * Gets the decimal representation of a roman numeral
 * @param {String} str 
 */
function romanNumeralToInteger(str) {
    if (typeof str == 'string') {
        let map = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1,
        }
        let num = 0;
        let i = 0;
        if (str[0] == 'M' && str.length % 2 == 1) {
            i = 1;
            num += 1000;
        }
        for (i; i < str.length - 1; i += 2) {
            if (map[str[i]] >= map[str[i + 1]]) {
                num += (map[str[i]] + map[str[i + 1]])
            } else {
                num += (map[str[i + 1]] - map[str[i]])
            }
        }
        if (str.length % 2 == 1 && str[0] != 'M') num += map[str[str.length - 1]]
        return num;
    }
}

console.log(romanNumeralToInteger('III'))
console.log(romanNumeralToInteger('DCIX'))
console.log(romanNumeralToInteger('MXDII'))
console.log(romanNumeralToInteger('MCCCXL'))