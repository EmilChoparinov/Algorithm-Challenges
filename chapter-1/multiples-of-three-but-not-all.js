/**
 * prints multiples for three from -300 to 0, skipping -6 and -3
 */
function printMultiples(){
    for(let i = -300; i <= 0; i++){
        if(i%3 == 0 && i != -3 && i != -6){
            console.log(i)
        }
    }
}

printMultiples()