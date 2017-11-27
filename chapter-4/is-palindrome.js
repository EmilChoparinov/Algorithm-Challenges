/**
 * determines if the string given is a strict palindrome
 * @param {String} str 
 */
function palindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('racecar'))
console.log(palindrome('Dud'))