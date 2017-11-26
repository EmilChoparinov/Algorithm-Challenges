function nthToLast(arr, order){
    if(arr instanceof Array){
        if(order > arr.length) return null;
        return arr[arr.length - order];
    }
}

console.log(nthToLast([5,2,3,6,4,9,7],3))