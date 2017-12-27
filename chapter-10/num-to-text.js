const counts = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000:"thousand",
}

function numToText(n) {
    if (typeof n == 'number') {
        if (n < 10) return counts[n];
        let scaledNums = [];
        scaledNums.push(parseInt("" + Math.floor(n / 10) % 10 + n % 10));
        n = Math.floor(n / 100);
        let k = 1;
        while (n != 0) {
            k++;
            scaledNums.push((n % 10) * Math.pow(10, k));
            n = Math.floor(n / 10);
        }
        let s = "";
        for (let i = scaledNums.length - 1; i >= 0; i--) {
            if (k >= 2) {
                s += counts[scaledNums[i] / Math.pow(10, k)];
                if (counts[Math.pow(10, k)]) {
                    s += " " + counts[Math.pow(10, k)] + " ";
                }
            } else {
                s += counts[scaledNums[i]];
            }
            k--;
        }
        console.log(s);
        console.log(scaledNums);
    }
}

console.log(numToText(40213));