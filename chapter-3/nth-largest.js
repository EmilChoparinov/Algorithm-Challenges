/**
 * Finds the largest element greater than n
 * @param {Array} arr 
 * @param {Number} n lowest point n
 */
function nthLargest(arr, n){
    if(arr instanceof Array && typeof n == 'number'){
        let max = n;
        arr.forEach(function(e){
            if(e > max) max = e;
        })
        return max;
    }
}

console.log(nthLargest([1,2,3,4,5,123,5,12,2,5,1,35,7,8,9], 100))