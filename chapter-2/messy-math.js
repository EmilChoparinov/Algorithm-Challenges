/**
 * Get the sum from a bunch of condition
 * @param {Number} num number to do some math on
 */
function messyMath(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        if(i % 3 == 0){
            continue;
        }
        else if(i % 7 == 0){
            sum += i * 2;
        }
        else if(num/3 == i){
            return -1;
        }else{
            sum += i;
        }
    }
    return sum;
}

console.log(messyMath(4))
console.log(messyMath(8))
console.log(messyMath(15))