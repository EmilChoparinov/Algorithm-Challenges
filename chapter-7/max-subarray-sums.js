function maxSubarraySums(arr) {
    if (arr instanceof Array) {
        let bestSum = arr[0];
        let nextSum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            nextSum = nextSum + arr[i];
            if (nextSum > bestSum) {
                bestSum = nextSum;
            }
            if (nextSum < 0) {
                nextSum = 0;
            }
        }
        return bestSum;
    }
}

console.log(maxSubarraySums([1, 2, -4, 3, -2, 3, -1]));