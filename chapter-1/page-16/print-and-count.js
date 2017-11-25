/**
 * Prints all integer multiples of 5, from 512 to 4096. Also logs how many there were
 */
function printAndCount(){
    let c = 0;
    for(let i = 512; i <= 4096; i++){
        if(i % 5 == 0){
            c++;
            console.log(`${i} is a multiple of 5. Instance ${c}`)
        }
    }
}

printAndCount()