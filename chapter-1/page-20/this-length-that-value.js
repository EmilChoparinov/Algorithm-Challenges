/**
 * Given two numbers, return array of length num1 with each value num2. Print "jinx!" if they are the same.
 * @param {Number} num1 length of the array
 * @param {Number} num2 element of the array
 */
function thisLengthThatValue(num1, num2){
    if(num1 == num2) console.log('jinx!')
    let arr = []
    for(let i = 0; i < num1; i++){
        arr.push(num2)
    }
    return arr;
}

console.log(thisLengthThatValue(6,6))