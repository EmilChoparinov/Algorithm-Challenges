function smarterSum(n) {
    let s = 0;
    for(let i = 1; i <= n; i++) s += i;
    return s;
}

console.log(smarterSum(3))