function inOrderSubsets(str, aux = "", subsets = []) {
    if (str.length <= 0) return subsets.push(aux);
    inOrderSubsets(str.slice(1), aux + str[0] , subsets);
    inOrderSubsets(str.slice(1), aux, subsets);
    return subsets;
};

console.log(inOrderSubsets('abc'))