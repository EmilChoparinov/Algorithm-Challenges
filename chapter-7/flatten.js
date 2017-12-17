function Flatten(arr, result = []){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] instanceof Array){
                Flatten(arr[i], result);
            }else{
                result.push(arr[i]);
            }
        }
        return result;
    }
}

var x = [1,[2,3, [4,[6,7]]],4,[[[[[[[[6,8]]]]]]]]];
console.log(Flatten(x));