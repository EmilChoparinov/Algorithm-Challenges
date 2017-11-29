/**
 * finds if word is in alpha order
 * @param {String} str 
 */
function isWorldAlpha(str){
    if(typeof str == 'string'){
        str.toUpperCase();
        let start = 'A';
        for(let i = 0; i < str.length; i++){
            if(str[i] < start){
                return false;
            }
            start = str[i];
        }
        return true;
    }
}

var s = "agabcd";
console.log(isWorldAlpha(s));