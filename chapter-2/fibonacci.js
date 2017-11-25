/**
 * Sum of a fibbonaci to a specific number
 * @param {Number} num number that the fibonacci will end at
 */
function fibbonaci(num) {
    //0,1,1,2,3,4,8,13,21,34
    var cur = 1, last = 0, temp;
    while (num >= 0) {
        temp = cur;
        cur = cur + last;
        last = temp;
        num--;
    }

    return last;
}
console.log(fibbonaci(7))