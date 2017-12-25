/**
 * gets tribonacci at index n
 * @param {Number} n 
 */
function rTrib(n){
    n = Math.floor(n);
    if(n <= 0) return 0;
    if(n == 1) return 0;
    if(n == 2) return 1;
    return rTrib(n-1) + rTrib(n-2) + rTrib(n-3);
}

console.log(rTrib(6))