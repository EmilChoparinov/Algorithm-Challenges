function allLooselyInterleaved(str1, str2, aux = "", solutions = []) {
    if (typeof str1 == 'string' && typeof str2 == 'string') {
        if (str1.length == 0 && str2.length == 0) return solutions.push(aux);
        if (str1.length != 0) allLooselyInterleaved(str1.slice(1, str1.length), str2, aux + str1.slice(0, 1), solutions);
        if (str2.length != 0) allLooselyInterleaved(str1, str2.slice(1, str2.length), aux + str2.slice(0, 1), solutions);
        return solutions;
    }
}

console.log(allLooselyInterleaved("ab", "yz"));