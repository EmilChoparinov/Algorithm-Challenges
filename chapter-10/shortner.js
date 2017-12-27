function shortener(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        if (str.length < len) {
            let padding = new Array(Math.floor(Math.abs((str.length - len)) / 2) + 1).join(" ");
            let extra = (len % 2 == 0) ? "" : " ";
            return "|" + padding + str + padding + extra + "|";
        } else {
            str = removeLeadingOrTrailingSpaces(str, len);
            str = removeBetweenSpacesAndCapitlize(str, len);
            str = removePunctuation(str, len);
            str = removeLowerCase(str, len);
            str = removeUpperCase(str, len);
            return str;
        }
    }
}

function removeLeadingOrTrailingSpaces(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        let left = 0;
        let right = str.length - 1;
        while (left < right && (right - left) > len) {
            if (str[left] == " ") left++;
            if (str[right] == " ") right--;
            if (str[right] != " " && str[left] != " ") break;
        }
        return str.slice(left, right + 1);
    }
}
function removeBetweenSpacesAndCapitlize(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        let s = "";
        let total = str.length;
        let start = str.length - 1;
        while (total > len && start >= 0) {
            if (str[start - 1] == " ") {
                s += str[start].toUpperCase();
                total--;
                start--;
            } else {
                s += str[start];
            }
            start--;
        }
        let reversedString = "";
        for (let i = s.length - 1; i >= 0; i--) reversedString += s[i];
        let beginningPiece = ""
        for (let i = start; i >= 0; i--) {
            if (str[i - 1] == " ") {
                beginningPiece += str[i].toUpperCase();
            } else {
                beginningPiece += str[i];
            }
        }
        s = "";
        for (let i = beginningPiece.length - 1; i >= 0; i--) s += beginningPiece[i];
        return s + reversedString;
    }
}
function removePunctuation(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        let s = "";
        let start = str.length - 1;
        let total = str.length;
        while (total > len && start >= 0) {
            if (str[start] == "." || str[start] == "?" || str[start] == "!" || str[start] == "," || str[start] == ";" || str[start] == "'") {
                start--;
                total--;
            }
            s += str[start];
            start--;
        }
        for (let i = start; i >= 0; i--) {
            s += str[i];
        }

        let reversedString = "";
        for (let i = s.length - 1; i >= 0; i--) reversedString += s[i];
        return reversedString;
    }
}
function removeLowerCase(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        str = lowerVowels(str, len);
        str = lowerCase(str, len);
        return str;
    }
}
function lowerVowels(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        let s = "";
        let start = str.length - 1;
        let total = str.length;

        //remove all vowels first from back
        while (total > len && start >= 0) {
            if (str[start] == "a" || str[start] == "e" || str[start] == "i" || str[start] == "o" || str[start] == "u") {
                start--;
                total--;
                continue;
            }
            s += str[start];
            start--;
        }
        let reversedString = "";
        for (let i = s.length - 1; i >= 0; i--) reversedString += s[i];
        return str.slice(0, start + 1) + reversedString;
    }
}
function lowerCase(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        let s = "";
        let start = str.length - 1;
        let total = str.length;
        while (total > len && start >= 0) {
            if (97 <= str.charCodeAt(start) && str.charCodeAt(start) <= 122) {
                start--;
                total--;
                continue;
            }
            s += str[start];
            start--;
        }
        let reversedString = "";
        for (let i = s.length - 1; i >= 0; i--) reversedString += s[i];
        return str.slice(0, start + 1) + reversedString;
    }
}
function removeUpperCase(str, len) {
    if (typeof str == 'string' && typeof len == 'number') {
        return (str.length > len) ? str.slice(0, len) : str;
    }
}

for (let i = 40; i >= 0; i--) {
    console.log(shortener("It's a wonderful life, Beth!", i));
}