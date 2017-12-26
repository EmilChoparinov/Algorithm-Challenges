function validParens(n, str = "(", total = .5, valids = [], k = 1) {
    if (typeof n == 'number') {
        if (total == n) {
            if (k == 0 && str[str.length - 1] != "(") valids.push(str);
            return;
        }
        validParens(n, str + "(", total + .5, valids, k + 1);
        validParens(n, str + ")", total + .5, valids, k - 1);
        return valids;
    }
}

function validParens2(n, str = "", open = 0, close = 0, solutions = []) {
    if (str.length == n * 2) {
        return solutions.push(str);
    }
    if (open < n) {
        validParens2(n, str + "(", open + 1, close, solutions);
    }
    if (close < open) {
        validParens2(n, str + ")", open, close + 1, solutions);
    }
    return solutions;
}

console.log(validParens2(2));