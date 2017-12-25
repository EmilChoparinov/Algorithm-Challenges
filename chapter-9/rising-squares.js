/**
 * formatted squares
 * @param {Number} n highest value in list
 * @param {Array} vals memo
 * @param {Number} cVal memo
 */
function risingSquares(n, vals = [], cVal = 1) {
    if (cVal > n) return vals.push(Math.pow(n, 2));
    vals.push(Math.pow(cVal, 2));
    risingSquares(n, vals, cVal + 2);
    if (cVal != 1) {
        vals.push(Math.pow(cVal - 1, 2));
    }
    return vals;
}

console.log(risingSquares(8));