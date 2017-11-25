function printMaxMinAverageArrayVals(arr){
    if(arr instanceof Array){
        let max = arr[0], min = arr[0], sum = 0;
        arr.forEach(function(e){
            if(e > max) max = e;
            if(e < min) min = e;
            sum += e;
        })
        console.log(`max: ${max}\nmin: ${min}\navg: ${sum/arr.length}`)
    }
}

printMaxMinAverageArrayVals([1,2,3,4,5,6,7,-1,8,12,9,10])