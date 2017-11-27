/**
 * Converts an integer to a roman numeral
 * @param {Number} num 
 */
function integerToRomanNumerals(num) {
    if (typeof num == 'number') {
        num = Math.floor(num);
        let map = [
            { 'roman': 'M', 'num': 1000 },
            { 'roman': 'IM', 'num': 999},
            { 'roman': 'XM', 'num': 990},
            { 'roman': 'CM', 'num': 900 },
            { 'roman': 'D', 'num': 500 },
            { 'roman': 'ID', 'num': 499},
            { 'roman': 'XD', 'num': 490},
            { 'roman': 'CD', 'num': 400 },
            { 'roman': 'C', 'num': 100 },
            { 'roman': 'IC', 'num': 99 },
            { 'roman': 'XC', 'num': 90 },
            { 'roman': 'L', 'num': 50 },
            { 'roman': 'IL', 'num': 49 },
            { 'roman': 'XL', 'num': 40 },
            { 'roman': 'X', 'num': 10 },
            { 'roman': 'IX', 'num': 9 },
            { 'roman': 'V', 'num': 5 },
            { 'roman': 'IV', 'num': 4 },
            { 'roman': 'I', 'num': 1 },
        ]
        let roman = '';
        for (let i = 0; i < map.length; i++) {
            let addThis = Math.floor(num / map[i].num);
            if (addThis != 0) {
                for (let j = 0; j < addThis; j++) {
                    roman += map[i].roman;
                }
                num = num - (map[i].num * addThis);
            }
        }
        return roman;
    }
}

console.log(integerToRomanNumerals(4))
console.log(integerToRomanNumerals(349))
console.log(integerToRomanNumerals(444))