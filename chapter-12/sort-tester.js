let arrays = [
    [1, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48],
    [87, 97, 70, 93, 97, 78, 85, 20, 9, 77, 68, 93, 58, 34, 51],
    [88, 37, 91, 31, 13, 62, 64, 58, 93, 92, 33, 1, 75, 59, 15],
    [49, 77, 35, 84, 100, 36, 42, 30, 50, 28, 25, 95, 4, 63, 49],
    [96, 53, 99, 100, 33, 51, 76, 9, 29, 89, 31, 91, 30, 94, 90]
];

module.exports = function testSort(callback) {
    let attempts = [];
    arrays.forEach(array => attempts.push(callback(array)));
    attempts.forEach(attempt => {
        console.log("currently attempting... ", attempt);
        for (let i = 0; i < attempt.length - 1; i++) {
            if (attempt[i] > attempt[i + 1]) {
                console.log(`FAIL @ ${attempt[i]} -> ${attempt[i + 1]}`);
                return;
            }
        };
        console.log("SUCCESS");
    });
}