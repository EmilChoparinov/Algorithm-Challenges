/**
 * Removes blanks from the specified string
 * @param {String} str 
 */
function removeBlanks(str){
    if(typeof str == 'string'){
        let noSpace = "";
        for(let i = 0; i < str.length; i++){
            if(str[i] != ' ') noSpace += str[i];
        }
        return noSpace;
    }
}

console.log(removeBlanks(' Pl   ayTha   tF  un kyM  u s ic'))