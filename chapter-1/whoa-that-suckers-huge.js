/**
 * Add odd integers from -300,000 to 300,000 and console.log the final sum (will be 0 due to symmetry)
 */
function sumBetween300000(){
    let sum = 0;
    for(let i = -300000; i <= 300000; i++){
        if(i % 2 != 0){
            sum += i;
        }
    }
    console.log(sum)
}

sumBetween300000()