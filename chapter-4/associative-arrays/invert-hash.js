/**
 * inverts a hash
 * @param {Object} assocArr 
 */
function invertHash(assocArr){
    for(let i in assocArr){
        console.log(assocArr[i]);
        let temp = assocArr[i];
        delete assocArr[i];
        assocArr[temp] = i;
    }
    return assocArr;
}

var obj = {
    "name": "zaphod",
    "charm": "high",
    "morals": "dicey",
}

console.log(invertHash(obj));