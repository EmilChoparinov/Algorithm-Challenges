/**
 * Create a function that accepts a number as an input. Return a new array that counts down by one, from the number down to 0.
 * @param {Number} num starting number of the array
 * @returns {Number|Array} array of all numbers from num to 0 
 */
function countDown(num){
    let arr = []
    for(let i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}

// Who long is the array? length = num + 1
console.log(countDown(50))