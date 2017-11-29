/**
 * Reverses a given string and returns that string reversed
 * @param {String} str 
 */
function reverse(str) {
    if (typeof str == 'string') {
        let reversed = ''
        for (let i = str.length - 1; i >= 0; i--){
            reversed += str[i];
        }
        return reversed;
    }
}

console.log(reverse('abcdefghijk'));