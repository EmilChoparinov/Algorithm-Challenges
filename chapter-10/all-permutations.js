function allPerms(str, aux = "", sol = []) {
    if (typeof str == 'string') {
        if (str.length == 0) return sol.push(aux);
        for (let i = 0; i < str.length; i++) {
            allPerms(str.slice(0, i) + str.slice(i + 1, str.length), aux += str[i], sol);
        }
        return sol;
    }
}

console.log(allPerms("team"));