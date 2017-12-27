function uniqueLetters(str) {
    if (typeof str == 'string') {
        let set = {};
        for (let i = 0; i < str.length; i++) {
            if (str[i] != "." || str[i] != "!" || str[i] != ",") {
                if (!set[str[i]]) set[str[i]] = 1;
                else set[str[i]] += 1;
            }
        }
        console.log(set);
        let s = "";
        for (let i = 0; i < str.length; i++) {
            if (set[str[i]] == 1) s += str[i];
    }
        return s;
    }
}

console.log(uniqueLetters("Snap! Crackle! Poop!"));