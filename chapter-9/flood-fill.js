/**
 * fills the canvas from startxy's color to all the touching startxy colors with cColor
 * @param {Array} canvas 2 dimensional array
 * @param {Array} startXY [xCor][yCor] of the starting position
 * @param {Number} newColor color to replace
 * @param {Number} cColor current color -> automatic
 */
function floodFill(canvas, startXY, newColor, cColor = canvas[startXY[0]][startXY[1]]) {
    if (canvas instanceof Array && startXY instanceof Array && typeof newColor == 'number') {
        startXY[0] = parseInt(startXY[0]);
        startXY[1] = parseInt(startXY[1]);
        if (canvas[startXY[0] + 1]) {
            if (canvas[startXY[0] + 1][startXY[1]] == cColor) {
                canvas[startXY[0] + 1][startXY[1]] = newColor;
                floodFill(canvas, [[startXY[0] + 1], [startXY[1]]], newColor, cColor);
            }
        }
        if (canvas[startXY[0] - 1]) {
            if (canvas[startXY[0] - 1][startXY[1]] == cColor) {
                canvas[startXY[0] - 1][startXY[1]] = newColor;
                floodFill(canvas, [[startXY[0] - 1], [startXY[1]]], newColor, cColor);
            }
        }
        if (canvas[startXY[0]][startXY[1] + 1] == cColor) {

            canvas[startXY[0]][startXY[1] + 1] = newColor;
            floodFill(canvas, [[startXY[0]], [startXY[1] + 1]], newColor, cColor);
        }
        if (canvas[startXY[0]][startXY[1] - 1] == cColor) {

            canvas[startXY[0]][startXY[1] - 1] = newColor;
            floodFill(canvas, [[startXY[0]], [startXY[1] - 1]], newColor, cColor);
        }
        return canvas;
    }
}

let canvas = [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
]
let startXY = [2, 2];
let newColor = 1;

console.log(floodFill(canvas, startXY, newColor));