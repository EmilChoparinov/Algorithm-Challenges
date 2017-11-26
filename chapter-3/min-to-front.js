/**
 * Moves to smallest number to the front of the array
 * @param {Array|Number} arr an array of numbers
 * @returns {Array}
 */
function minToFront(arr) {
    if (arr instanceof Array) {
        let min = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        let val = arr[min];
        for(let i = min; i >= 0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = val;
        console.log(arr);
    }
}

//1,4,2,3,5
minToFront([4, 2, 1, 3, 5])