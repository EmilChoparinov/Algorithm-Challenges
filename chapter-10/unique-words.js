function uniqueWords(str) {
    if (typeof str == 'string') {
        let set = new Set();
        let s = "";
        let k = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                if (!set.has(s)) {
                    k += s + " ";
                    set.add(s);
                }
                s = "";
            } else {
                s += str[i];
            }
        }
        if (!set.has(s)) {
            k += s + " ";
        }
        return k;
    }
}

console.log(uniqueWords("Sing! String a song; sing out loud; sing out strong."));