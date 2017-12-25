/**
 * Dynamic solution to calculating the max of a given path from (0,0) to (field.length-1)((field.length-1).length-1) O(n^2) time O(n) space
 * @param {Array} field 2d array of values
 */
function calculateMax(field) {
    if (field instanceof Array) {
        let sumToPaths = [...Array(field.length).keys()].map(i => Array(field.length));
        sumToPaths[0][0] = field[0][0];
        for (let i = 1; i < field[0].length; i++) sumToPaths[0][i] = sumToPaths[0][i - 1] + field[0][i];
        for (let i = 1; i < field.length; i++) sumToPaths[i][0] = sumToPaths[i - 1][0] + field[i][0];
        for (let row = 1; row < field.length; row++) {
            for (let col = 1; col < field[row].length; col++) {
                sumToPaths[row][col] = field[row][col] + Math.max(sumToPaths[row - 1][col], sumToPaths[row][col - 1]);
            }
        }
        return sumToPaths[sumToPaths.length - 1][sumToPaths[sumToPaths.length - 1].length - 1]
    }
}

let field = [
    [1, 2, 3],
    [4, 8, 2],
    [1, 5, 3],
]
console.log(calculateMax(field));