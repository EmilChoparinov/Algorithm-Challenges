/**
 * Length of assocArr
 * @param {Object} assocArr 
 */
function numberOfValues(assocArr){
    let c = 0;
    for(let i in assocArr) c++;
    return c;
}