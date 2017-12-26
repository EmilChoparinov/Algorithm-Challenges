/**
 * gets all possible combinations of stair climbing with a limit of only moving up by 1 or two stairs each
 * @param {Number} n total stairs
 */
function climbingStairs(n, i = 0, arr = [], cArr = []) {
    if (i > n) return arr.push(cArr);
    if (i == n) {
        return arr.push(cArr);
    }
    if (i <= n - 2) {
        let t = cArr.slice(0);
        t.push(2);
        climbingStairs(n, i + 2, arr, t);
    }
    let o = cArr.slice(0);
    o.push(1);
    climbingStairs(n, i + 1, arr, o);
    return arr;
}

function climbingStairsLeftFoot(n, i = 0, arr = [], cArr = []) {
    if (i > n) {
        if (cArr.length % 2 == 0) arr.push(cArr);
        return;
    }
    if (i == n) {
        if (cArr.length % 2 == 0) arr.push(cArr);
        return;
    }
    if (i <= n - 2) {
        let t = cArr.slice(0);
        t.push(2);
        climbingStairsLeftFoot(n, i + 2, arr, t);
    }
    let o = cArr.slice(0);
    o.push(1);
    climbingStairsLeftFoot(n, i + 1, arr, o);
    return arr;
}

console.log(climbingStairsLeftFoot(4));