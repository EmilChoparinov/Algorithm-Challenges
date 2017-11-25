/**
 * Returns an array of all odd integers between 1 and 255
 */
function returnOddsArray1To255(){
    let arr = []
    for(let i = 1; i <= 255; i++){
        if(i%2 != 0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(returnOddsArray1To255())