/**
 * Finds the min max avg of the given array
 * @param {Array|Number} arr an array of numbers
 * @returns {Object} statistics of min max avg
 */
function minMaxAvg(arr){
    if(arr instanceof Array){
        let stats = {
            "min": arr[0],
            "max": arr[0],
            "avg": 0,
        }
        for(let i = 0; i < arr.length; i++){
            if(stats.max < arr[i]) stats.max = arr[i];
            if(stats.min > arr[i]) stats.min = arr[i];
            stats.avg += arr[i];
        }
        stats.avg /= arr.length;
        return stats;
    }
}

console.log(minMaxAvg([1,2,3,4,5,6,7,8,9,10]));