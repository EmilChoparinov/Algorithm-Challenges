/**
 * finds if query is substring of this
 * @param {String} query 
 */
String.prototype.search1 = function (query){
    console.log(this.substring(0, 0 + query.length));
    for(let i = 0; i < this.length-query.length; i++){
        if(this.substring(i, i + query.length) == query) return true;
    }
    return false;
}

var s = "blahblahabcal";
console.log(s.search1("abc"));