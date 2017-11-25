/**
 * Prints the sum and integers from 0 to 255
 */
function printIntsAndSum0To255(){
    let sum = 0;
    for(let i = 0; i <=255; i++){
        sum+=i;
        console.log(`sum so far: ${sum}. Current integer ${i}`)
    }
}

printIntsAndSum0To255()