function unevenDigits(n, place = 0, result = 0) {
    if (n == 0) return result;
    let d = n % 10;
    if (d % 2 != 0) {
        if (d < 0) {
            result = Math.abs(result);
            d = Math.abs(d);
            result += d * Math.pow(10, place);
            result *= -1;
        } else {
            result += d * Math.pow(10,place);
        }
        return unevenDigits(Math.trunc(n / 10), place + 1, result);
    } else {
        return unevenDigits(Math.trunc(n / 10), place, result);
    }
}

console.log(unevenDigits(-1845));
console.log(unevenDigits(20));
console.log(unevenDigits(79));
console.log(unevenDigits(-92));