function zibonacci(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (n % 2 != 0) return n + zibonacci(n - 1) + 1;
    else return n + zibonacci(n + 1) + 1;
}

console.log(zibonacci(10));