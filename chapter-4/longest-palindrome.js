function longestPalindrome(str) {
    if (typeof str == 'string') {
        let isPal = function (s) {
            if (typeof s == 'string') {
                for (var i = 0; i < s.length; i++) {
                    if (s.charAt(i) != s.charAt(s.length - 1 - i)) {
                        return false;
                    }
                }
                return true;
            }
        }
        let maxPal = '';
        for (let startLetter = 0; startLetter < str.length; startLetter++) {
            for (let endLetter = str.length; endLetter >= startLetter; endLetter--) {
                console.log(str.substr(startLetter, endLetter));
                if (isPal(str.substr(startLetter, endLetter))) {
                    if (str.substr(startLetter, endLetter).length > maxPal.length) {
                        maxPal = str.substr(startLetter, endLetter);
                    }
                }
            }
            endLetter = str.length;
        }
        return maxPal;
    }
}

console.log(longestPalindrome('Yikes! my favorite racecar erupted!'))