/**
 * Concats strings together
 * @param {String} str1 
 * @param {String} str 
 */
function concat(str1, ...str) {
    if (typeof str1 == 'string') {
        str.forEach(element => {
            str1 += element;
        });
    }
    return str1;
}

var s = "hello";
console.log(concat(s, "okay", "test", "123"));