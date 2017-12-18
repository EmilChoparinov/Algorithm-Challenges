function fancyFibonacci(n){
    let f1 = 1;
    let f2 = 0;
    for(let i = 0; i < n; i++){
        let t = f2;
        f2 = f1 + f2;
        f1 = t;
    }
    return f1;
}

for(let i = 1; i < 10; i++){
    console.log(fancyFibonacci(i));
}