function scaleArray(arr, num){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            arr[i] *= num;
        }
        return num;
    }
}