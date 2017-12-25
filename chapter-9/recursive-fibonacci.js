/**
 * get fib number at n index
 * @param {Number} n 
 */
function rFib(n) {
    n = Math.floor(n);
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return rFib(n - 1) + rFib(n - 2);
}

for (let i = 0; i < 10; i+= .5) {
    console.log(rFib(i));
}