function makeStringPalindrome(str) {
    if (typeof str == 'string') {
        for (let i = 0; i < str.length; i++) {
            let isAPal = true;
            let left = 0;
            let right = str.length - 1;
            while (left < right) {
                if (left == i) left++;
                if (right == i) right--;
                if (str[left] != str[right]) isAPal = false;
                left++;
                right--;
            }
            if (isAPal) return i;
        }
        return -1;
    }
}

console.log(makeStringPalindrome("adcfda"));