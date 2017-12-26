function sumOfSquares(n, total = 1, v = 2, arr = [], curArr = [1]) {
    if (typeof n == 'number') {
        if (total == n) return arr.push(curArr);
        if (total > n) return arr;
        for (let i = v; i < Math.sqrt(n); i++) {
            let nArr = curArr.slice(0);
            nArr.push(i * i);
            sumOfSquares(n, total + i * i, v + 1, arr, nArr);
        }
        return arr;
    }
}

console.log(sumOfSquares(30));