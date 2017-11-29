/**
 * finds if the string contains valid parenthesis O(n) solution
 * @param {String} str 
 */
function parensValid(str){
    if(typeof str == 'string'){
        let stack = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] === '(') stack++;
            if(str[i] === ')') stack--;
            if(stack < 0) return false;
        }
        if(stack != 0 )return false;
        return true;
    }
}

console.log(parensValid('Y(e(p))p(3)r)s'))
console.log(parensValid('Y(e(p)p(3)r)s'))
console.log(parensValid('Y(e(pp(3)r)s'))