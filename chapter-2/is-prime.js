/**
 * Finds if a given number is a prime number
 * @param {Number} num a number to check if prime
 */
function isPrime(num) {
    if (typeof num == 'number') {
        if (num == 2) return true;
        if (num % 2 == 0 || num <= 1) return false;
        let sqrtNum = Math.sqrt(num) + 1;
        for (let i = 0; i < sqrtNum; i += 2)
            if (num % i == 0) return false;
        return true;
    }
}

console.log(isPrime(2))