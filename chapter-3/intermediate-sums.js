/**
 * Finds the sum of every 10 values and inserts every 10 O(n^2) solution
 * @param {Array} arr 
 */
function intermediateSums(arr) {
    if (arr instanceof Array) {
        let addSum = function (index, sum){
            if(typeof index == 'number' && typeof sum == 'number'){
                for(let i = arr.length - 1; i >= index; i--){
                    arr[i+1] = arr[i];
                }
                arr[index] = sum;
            }
        }
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(i % 10 == 0 && i > 0){
                addSum(i, sum);
                sum = 0;
            }else{
                sum += arr[i];
            }
        }
        addSum(arr.length, sum);
        return arr;
    }
}

console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]))