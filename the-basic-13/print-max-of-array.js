function printMaxOfArray(arr){
    if(arr instanceof Array){
        let max = arr[0];
        arr.forEach(function(e){
            if(max < e) max = e;
        })
        console.log(max)
    }
}

printMaxOfArray([1,2,3,4,5,513,412,123,6,52])