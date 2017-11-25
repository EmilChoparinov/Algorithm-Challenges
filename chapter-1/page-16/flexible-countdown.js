/**
 * Given lowNum, highNum, mult, print multples of mult from highNum down to lowNum, using a forloop
 * @param {Number} lowNum left bound
 * @param {Number} highNum right bound
 * @param {Number} mult multipler/decrementer
 */
function flexibleCountdown(lowNum, highNum, mult){
    let cur = highNum;
    while(cur > lowNum){
        if(cur % mult == 0){
            console.log(cur);
        }
        cur--;
    }
}

flexibleCountdown(2, 9, 3);