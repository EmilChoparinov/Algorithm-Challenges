/**
 * Counts all nonspace characters in the string O(n) solution
 * @param {String} str 
 */
function countNonSpaces(str){
    if(typeof str == 'string'){
        let c = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] != ' ') c++;
        }
        return c;
    }
}

console.log(countNonSpaces('Honey pie, you are driving me crazy'))