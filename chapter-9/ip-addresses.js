/**
 * Generates a list of all possible/valid ip combinations from the given generic ip
 * @param {String} ip given ip characters
 * @param {Array} addresses memo for keeping addresses
 * @param {Number} dots memo for keeping track of which dot is being generated
 * @returns {Array} list of all addresses
 */
function getIp(ip, addresses = [], dots = 0) {
    //base case
    if (dots == 3) {
        //only add address if last characters between (. , ip.length) are <= 255
        if (parseInt(ip.slice(ip.lastIndexOf(".") + 1, ip.length)) <= 255) addresses.push(ip);
        return;
    }

    //if dot count is 0, set start to 0 (js default if -1)
    //else make it the last dot starting after it
    let startIdx = (dots == 0) ? 0 : ip.lastIndexOf(".") + 1;

    //s is for a pseudosum
    //d is the count of digits there are so far 
    let s = ip.charAt(startIdx), d = 1;
    
    //only continue to loop while pseudosum <= 255 and there are still digits to add
    while (parseInt(s) <= 255 && d < ip.length) {

        //inject a dot inbetween the current start + d and rerun the function
        getIp(ip.slice(0, startIdx + d) + "." + ip.slice(startIdx + d, ip.length), addresses, dots + 1);
        d++;
        s += ip.charAt(startIdx + d)
    }
    return addresses;
}

console.log(getIp("255255255"));