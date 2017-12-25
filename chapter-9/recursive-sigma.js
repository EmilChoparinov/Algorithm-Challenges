/**
 * recursively adds all numbers
 * @param {Number} n 
 */
function rSigma(n){
    if(n == 0) return 0;
    return n + rSigma(n-1);
}
console.log(rSigma(3));