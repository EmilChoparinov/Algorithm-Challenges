/**
 * recursively gets the factorial to n
 * @param {Number} n 
 */
function rFactorial(n){
    n = Math.floor(n);
    if(n == 0) return 1;
    return n * rFactorial(n-1);
}
console.log(rFactorial(3.4));