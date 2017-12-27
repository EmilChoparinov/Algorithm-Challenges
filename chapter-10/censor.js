function censor(str, censor) {
    if (typeof str == 'string' && censor instanceof Array) {
        let endStr = "";
        for (let i = 0; i < str.length; i++) {
            censor.forEach(censorWord => {
                if (typeof censorWord == 'string') {
                    let s = "";
                    for (let forward = i; forward < (censorWord.length + i) % str.length; forward++) {
                        s += str[forward];
                    }
                    if (s == censorWord) {
                        for (let i = 0; i < censorWord.length; i++) {
                            endStr += "x";
                        }
                        i += censorWord.length;
                    }
                }
            });
            endStr += str[i];
        }
        return endStr;
    }
}

console.log(censor("Snap crackle pop nicompoop!", ["crack", "poop"]));