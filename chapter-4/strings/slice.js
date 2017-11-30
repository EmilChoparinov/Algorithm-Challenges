/**
 * find a substring of a string
 * @param {Number} start 
 * @param {Number} end 
 */
String.prototype.slice1 = function(start, end){
    let s = "";
    for(let i = start; i < end; i++){
        s += this[i];
    }
    return s;
} 

var s = "This is cool";
console.log(s.slice1(1,4));