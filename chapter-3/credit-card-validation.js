function luhnFormula(arr){
    if(arr instanceof Array || arr instanceof String){
        let sum = 0;
        for(let i = arr.length - 2; i >= 0; i -= 2){
            arr[i] *= 2;
            if(arr[i] > 9) arr[i] -= 9;
            sum += arr[i] + arr[i-1];
        }
        sum += arr[arr.length - 1];
        return (sum % 10 == 0)
    }
}

console.log(luhnFormula([5,2,2,8,2]))