function makeStringPalindrome(str) {
    if (typeof str == 'string') {
        let left = 0, right = str.length - 1;
        for (let i = 0; i < str.length / 2; i++) {
            for (let j = str.length / 2; j < str.length + 1; j++) {
                let testStr = str.slice(0, j) + str[i] + str.slice(j, str.length);
                left = 0;
                right = testStr.length - 1;
                let isValid = true;
                while (left < right) {
                    if (testStr[left] != testStr[right]) {
                        isValid = false;
                        break;
                    }
                    left++;
                    right--;
                }
                if (isValid) return str[i];
            }
        }
        for (let i = str.length / 2; i < str.length; i++) {
            for (let j = 0; j < str.length / 2 + 1; j++) {
                let testStr = str.slice(0, j) + str[i] + str.slice(j, str.length);
                left = 0;
                right = testStr.length - 1;
                let isValid = true;
                while (left < right) {
                    if (testStr[left] != testStr[right]) {
                        isValid = false;
                        break;
                    }
                    left++;
                    right--;
                }
                if (isValid) return str[i];
            }
        }
        return "";
    }
}

console.log(makeStringPalindrome("tutu"));