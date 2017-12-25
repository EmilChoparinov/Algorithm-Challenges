/**
 * generates all the words possible from the dialer
 * @param {String} number telephone number (no dashe sanitation)
 * @param {Array | Object} dialer telephone words
 * @param {String} aux temp string (memoized)
 * @param {Array} words array of words (memoized)
 */
function telephoneWords(number, dialer, aux = "", words = []) {
    if (typeof number == "string") {
        if (number.length == 0) return words.push(aux);
        for (let i = 0; i < dialer[number[0]].length; i++) {
            telephoneWords(number.slice(1, number.length), dialer, aux + dialer[number[0]][i], words);
        }
        return words;
    }
}

let telephone = {
    0: "O",
    1: "I",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
}

let outcomes = telephoneWords("8182612", telephone);
// two words that should be in generated list
console.log(outcomes.filter(word => word == "VITAMIC" || word == "TITANIA"));