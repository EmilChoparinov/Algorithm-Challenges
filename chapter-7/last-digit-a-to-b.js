function lastDigitAtoB(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        let n = a;
        for(let i = 1; i < b; i++){
            n *= a;
        }
        return n % 10;
    }
}

console.log(lastDigitAtoB(3,4));
console.log(lastDigitAtoB(12,5));
console.log(lastDigitAtoB(237,124));