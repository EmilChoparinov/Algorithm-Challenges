/**
 * Log positive numbers starting at 2016, counting down by fours
 */
function countdownByFours(){
    let cur = 2016;
    while(cur > 0){
        if(cur % 4 == 0){
            console.log(cur)
        }
        cur--;
    }
}

countdownByFours()