/**
 * searches a matrix to see if a sequence exists
 * @param {Array} matrix Map to traverse through
 * @param {Array} matcher Array to match in map
 */
function matrixSearch(matrix, matcher) {
    if (matrix instanceof Array && matcher instanceof Array) {
        for (let matrixRow = 0; matrixRow < matrix.length; matrixRow++) {
            for (let matrixCol = 0; matrixCol < matrix[matrixRow].length; matrixCol++) {
                let testPassed = true;
                for (let matchRow = matrixRow; matchRow < matrixRow + matcher.length; matchRow++) {
                    for (let matchCol = matrixCol; matchCol < matrixCol + matcher[matchRow - matrixRow].length; matchCol++) {
                        if (matrix[matchRow][matchCol] != matcher[matchRow - matrixRow][matchCol - matrixCol]) {
                            testPassed = false;
                            break;
                        }
                    }
                    if (!testPassed) break;
                }
                if (testPassed) return true;
            }
        }
    }
    return false;
}

let map = [
    [12, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21],
]
let matcher = [
    [67, 78],
    [43, 32]
]

console.log(matrixSearch(map, matcher));