function longestWord(str) {
    if (typeof str == 'string') {
        let longestWord = "", possibleLongestWord = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                if (possibleLongestWord.length >= longestWord.length) longestWord = possibleLongestWord;
                possibleLongestWord = "";
            } else possibleLongestWord += str[i];
        }
        return (possibleLongestWord.length >= longestWord.length) ? possibleLongestWord : longestWord;
    }
}

let s = "Snap crackle pop makes the world go round!";
console.log(longestWord(s));