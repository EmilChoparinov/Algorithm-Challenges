/**
 * Prints numbers from -52 to 1065 in a formatted way
 * @returns {String} formatted string from -52, -51, ..., 1065
 */
function printInts(){
    let format = ""
    for(let num = -52; num <= 1065; num++){
        format += `${num}, `
    }
    return (format += `${1065}`)
}

console.log(printInts())