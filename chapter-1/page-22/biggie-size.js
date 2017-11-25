/**
 * A funciton that changes all positive numbers in the array to 'big'
 * @param {Array} arr an array
 */
function makeBiggie(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 0){
                arr[i] = "big"
            }
        }
        return arr;
    }
    return null;
}

console.log(makeBiggie([-1,3,5,-5]))