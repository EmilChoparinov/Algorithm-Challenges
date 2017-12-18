function trickTribonacci(n){
    let t1 = 1;
    let t2 = 0;
    let t3 = 0;
    for(let i = 0; i < n; i++){
        let temp1 = t1;
        let temp2 = t2;
        t1 = t1 + t2 + t3;
        t2 = temp1;
        t3 = temp2;
    }
    return t1;
}

for(let i = 0; i < 10; i++){
    console.log(trickTribonacci(i));
}