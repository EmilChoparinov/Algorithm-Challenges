function badChars(str, toRemove) {
    if (typeof str == 'string' && typeof toRemove == 'string') {
        let s = "";
        for (let i = 0; i < str.length; i++) {
            let isBad = false;
            for (let j = 0; j < toRemove.length; j++) {
                if(str[i] == toRemove[j]) isBad = true;
            }
            if(!isBad) s += str[i];
        }
        return s;
    }
}

console.log(badChars("Hello my name is", "emni"));