function concat(arr1, arr2){
    if(arr1 instanceof Array && arr2 instanceof Array){
        let newArr = [];
        newArr.length = arr1.length + arr2.length;
        for(let i = 0; i < arr1.length; i++){
            newArr[i] = arr1[i];
        }
        for(let i = arr1.length; i < newArr.length; i++){
            newArr[i] = arr2[i - arr1.length];
        }
        return newArr;
    }
}

console.log(concat([1,2,3], ['a','b','c']))