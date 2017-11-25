/**
 * Given arr add 1 to odd elements. print all values and return the array
 * @param {Array} arr an array of numbers
 */
function incrementTheSeconds(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 != 0){
                arr[i]++;
            }
        }
        console.log(arr);
        return arr;
    }
}

incrementTheSeconds([1,2,3,4,5,6,7,8,9])