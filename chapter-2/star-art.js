function drawLeftStars(num) {
    let start = "|*";
    for (let i = 1; i < 75; i++) {
        if (i % num == 0) {
            start += '*';
        } else {
            start += ' ';
        }
    }
    start += "|"
    return start;
}
function drawRightStars(num) {
    let start = "|";
    for (let i = 74; i > 0; i--) {
        if (i % num == 0) {
            start += '*';
        } else {
            start += ' ';
        }
    }
    start += "*|";
    return start;
}
function drawCenteredStars(num) {
    let start = "|";
    for (let i = 1; i < Math.floor(75 / 2)+1; i++) {
        if (i % num == 0) {
            start += '*';
        } else {
            start += ' ';
        }
    }
    start += '*';
    for (let i = start.length - 1; i >= 2; i--) {
        start += start[i];
    }
    start += '|'
    return start;
}

for (var i = 10; i >= 1; i--) {
    console.log(drawLeftStars(i))
}
for (var i = 1; i <= 10; i++) {
    console.log(drawLeftStars(i))
}
for (var i = 1; i < 10; i++) {
    console.log(drawRightStars(i))
}
for (var i = 10; i >= 1; i--) {
    console.log(drawRightStars(i))
}
for (var i = 1; i < 10; i++) {
    console.log(drawCenteredStars(i))
}
for (var i = 10; i >= 1; i--) {
    console.log(drawCenteredStars(i))
}