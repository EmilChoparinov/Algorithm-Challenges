/**
 * Generates an acronym in uppercases O(n) solution
 * @param {String} str 
 */
function acronym(str){
    if(typeof str == 'string'){
        let acronym = '';
        let c = 0;
        while(str[c] == ' ') c++;
        acronym += str[c];
        while(c < str.length - 1){
            if(str[c] == ' ') acronym += str[c + 1]
            c++;
        }
        return acronym.toUpperCase();
    }
}

console.log(acronym("there's no free lunch - gotta pay yer way "))