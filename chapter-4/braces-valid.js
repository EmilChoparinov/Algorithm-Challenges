/**
 * Determines if braces were validly placed
 * @param {String} str 
 */
function bracesValid(str) {
    if (typeof str == 'string') {
        let stack = [];
        let complement = {
            ')': '(',
            ']': '[',
            '}': '{',

        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
                stack.push(str[i]);
            }
            if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
                if (stack[stack.length-1] == complement[str[i]]){
                    stack.pop();
                }else{
                    return false;
                }
            }
        }
        if(stack.length != 0){
            return false;
        }
        return true;
    }
}

console.log(bracesValid('W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!'))
console.log(bracesValid('W(a{t}s[o(n{ c}o)m]e )h[e{r}e!'))
console.log(bracesValid('W(a{t}s[o(n{ c}o)m]e )h[e{r}e]]!'))