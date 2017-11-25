/**
 * Extracts a digit from the given number
 * @param {Number} num a number
 * @param {Number} digit a number representation of num
 */
function extractDigit(num, digit){
    num = Math.abs(num);
    if(digit > 0){
        for(let i = 0; i < digit; i++){
            num /= 10;
        }
        num = Math.floor(num) % 10;
        
    }else{
        for(let i = digit; i < 0; i++){
            num *= 10;
        }
        num = num % 10;
    }
    return num;
}

console.log(extractDigit(-1824.5,-1));