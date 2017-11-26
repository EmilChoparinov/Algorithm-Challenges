function swapPairs(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length-1; i += 2){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        return arr;
    }
}

console.log(swapPairs([1,2,3,4]))
console.log(swapPairs(['brendan', true, 42]))