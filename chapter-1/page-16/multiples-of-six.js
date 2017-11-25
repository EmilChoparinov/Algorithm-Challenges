/**
 * Using a while, print multiples of 6 up to 60000
 */
function multOfSix(){
    let c = 0;
    while(c <= 60000){
        if(c % 6 == 0){
            console.log(c)
        }
        c++;
    }
}

multOfSix()