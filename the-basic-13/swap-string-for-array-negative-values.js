/**
 * Takes an array and swaps every negative number for the string 'Dojo'
 * @param {Array} arr an array
 */
function swapStringForArrayNegativeVals(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 'Dojo';
            }
        }
        return arr;
    }
}

console.log(swapStringForArrayNegativeVals([-2,-1,0,1,2]))