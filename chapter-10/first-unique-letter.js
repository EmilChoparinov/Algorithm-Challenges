function indexOfFirstUniqueLetter(str) {
    if (typeof str == 'string') {
        let unique = -1;
        let set = new Set();
        for (let i = 0; i < str.length; i++) {
            if (!set.has(str[i])) {
                unique = i;
                set.add(str[i]);
            }
        }
        return unique;
    }
}

console.log(indexOfFirstUniqueLetter("empathetic monarch meets primo stinker"));