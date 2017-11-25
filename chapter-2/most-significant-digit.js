/**
 * Finds the largest digit in the number
 * @param {Number} num a number
 */
function getSigDigit(num){
    num = Math.abs(num);
    while(num != Math.floor(num)){
        num *= 10;
    }
    let sigDig = num % 10;
    while(num != 0){
        num /= 10;
        num = Math.floor(num);
        if(num % 10 > sigDig) sigDig = num % 10;
    }
    return sigDig;
}

console.log(getSigDigit(189.9))