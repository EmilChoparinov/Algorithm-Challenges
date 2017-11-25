/**
 * If value of [0] is greater than array's length, print "too big!"; if value at [0] is less than array's length, print "too small!"; otherwise print "just right!"
 * @param {Number} arr an array of length > 0
 */
function fit(arr) {
    if (arr instanceof Array) {
        if (arr[0] > arr.length) console.log('Too big!')
        else if (arr[0] < arr.length) console.log('Too small!')
        else console.log('Just right!')
    }
    return null;
}

fit([1,2,3])
fit([3,1,2])
fit([5,2,1])