/**
 * Adds valus from 100 to 4000000 inclusive if they are divisable by 3 or 5 but not both
 */
function threesFives(){
    let sum = 0;
    for(let i = 100; i < 4000000; i++){
        if(i % 3 == 0 && i % 5 == 0){
            continue;
        }
        else if(i % 3 == 0){
            sum += i;
            console.log(i)
        }
        else if(i % 5 == 0){
            sum += i;
            console.log(i)
        }
    }
    return sum;
}

console.log(threesFives())