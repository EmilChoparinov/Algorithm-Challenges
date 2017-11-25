/**
 * Finds the x intercept of a linear equation (y=mx+b)
 * @param {Number} m constant m, the slope of the line
 * @param {Number} b constant b, the y-intercept of the line
 */
function mathHelp(m, b){
    return -(b/m)
}

console.log(mathHelp(1,3))