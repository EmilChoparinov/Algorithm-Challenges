/**
 * Print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiples is equal to param4, then skil it. Do this using a while
 * @param {Number} param1 multiplier/decrementer
 * @param {Number} param2 left bound
 * @param {Number} param3 right bound 
 * @param {Number} param4 exception 
 */
function theFinalCountdow(param1, param2, param3, param4){
    let cur = param2;
    while(cur < param3){
        if(cur % param1 == 0 && cur != param4){
            console.log(cur);
        }
        cur++;
    }
}

theFinalCountdow(3,5,17,9)