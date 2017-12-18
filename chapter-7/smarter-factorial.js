function smarterFactorial(n){
    let f = 1;
    for(let i = 2; i <= n; i++) f *= i;
    return f;
}

console.log(smarterFactorial(0));