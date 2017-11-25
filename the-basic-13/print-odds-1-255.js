/**
 * Prints all odd numbers 1 to 255
 */
function printOdds1To255(){
    for(let i = 1; i <=255; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}

printOdds1To255()