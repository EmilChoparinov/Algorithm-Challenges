/**
 * Calculates the sum from 1 to num
 * @param {Number} num a number
 */
function sigma(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(sigma(5))