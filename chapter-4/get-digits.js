/**
 * Extracts digits from the string and returns a number
 * @param {String} str 
 */
function getDigits(str){
    if(typeof str == 'string'){
        let digitStr = '';
        for(let i = 0; i < str.length; i++){
            if(!isNaN(parseInt(str[i]))) {
                digitStr += str[i];
                console.log(str[i])
            }
        }
        return parseInt(digitStr);
    }
}

console.log(getDigits('a1b2c3'))