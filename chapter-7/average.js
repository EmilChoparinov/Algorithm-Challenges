/**
 * Gets the average of the array
 * @param {Array} arr 
 */
function average(arr){
    if(arr instanceof Array){
        let s = 0;
        arr.forEach(element => s += element);
        return s/arr.length;
    }
}

var arr = [1,2,3,4,5,6,7,8];
console.log(average(arr));