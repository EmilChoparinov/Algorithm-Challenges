/**
 * split implementation O(n)
 * @param {String} seperator seperator char
 * @param {Number} limit limit of array
 */
String.prototype.split1 = function (seperator, limit) {
    if (typeof seperator == 'string' && typeof limit == 'number') {
        let arr = [];
        if(seperator == ""){
            for(let i = 0; i < this.length; i++) arr.push(this[i]);
            return arr;
        }
        let str = "";
        let indx = 0;
        let c = 0;
        while (indx < this.length) {
            if (this[indx] != seperator) {
                str += this[indx];
            } else {
                if (str != "" && c < limit - 1) {
                    arr.push(str);
                    str = "";
                    c++;
                }
            }
            indx++;
        }
        if (str != "") arr.push(str);
        return arr;
    }
}

var string = "a;b;c";
console.log(string.split1(";", 2))