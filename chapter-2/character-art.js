/**
 *  draw stars from the left
 * @param {Number} num displacement between *
 * @param {String} char a character
 */
function drawLeftStars(num, char) {
    let start = "|"+char;
    for (let i = 1; i < 75; i++) {
        if (i % num == 0) {
            start += char;
        } else {
            start += ' ';
        }
    }
    start += "|"
    return start;
}
/**
 * draw stars from the right
 * @param {Number} num displacement between *
 * @param {String} char a character
 */
function drawRightStars(num,char) {
    let start = "|";
    for (let i = 74; i > 0; i--) {
        if (i % num == 0) {
            start += char;
        } else {
            start += ' ';
        }
    }
    start += char+"|";
    return start;
}
/**
 * draw stars from the center
 * @param {Number} num displacement between *
 * @param {String} char a character
 */
function drawCenteredStars(num,char) {
    let start = "|";
    for (let i = 1; i < Math.floor(75 / 2)+1; i++) {
        if (i % num == 0) {
            start += char;
        } else {
            start += ' ';
        }
    }
    start += char;
    for (let i = start.length - 1; i >= 2; i--) {
        start += start[i];
    }
    start += '|'
    return start;
}

for (var i = 10; i >= 1; i--) {
    console.log(drawLeftStars(i, 'a'))
}
for (var i = 1; i <= 10; i++) {
    console.log(drawLeftStars(i,'a'))
}
for (var i = 1; i < 10; i++) {
    console.log(drawRightStars(i,'a'))
}
for (var i = 10; i >= 1; i--) {
    console.log(drawRightStars(i,'a'))
}
for (var i = 1; i < 10; i++) {
    console.log(drawCenteredStars(i,'a'))
}
for (var i = 10; i >= 1; i--) {
    console.log(drawCenteredStars(i,'a'))
}