/**
 * Swaps the given number as a name and the given name as a number
 * @param {String} myName a given name
 * @param {Number} myNumber a given number
 * @returns {Object} myName and Number back
 */
function swap(myName, myNumber){
    temp = myName;
    myName = myNumber;
    myNumber = temp;
    return {
        'myNumber': myNumber,
        'myName': myName
    }
}

console.log(swap("emil", 42))