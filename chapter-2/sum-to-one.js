/**
 * Sums a given integers digits repeatedly until the sum is only one digit
 * @param {Number} num num that will be summed to one
 */
function sumToOne(num){
    if(typeof num == 'number'){
        let sNum = new String(num)
        while(num > 9){
            let sum = 0;
            for(var i = 0; i < sNum.length; i++){
                sum += Number.parseInt(sNum[i]);
            }
            num = sum;
            sNum = new String(num);
        }
        return num;
    }
}

console.log(sumToOne(928))