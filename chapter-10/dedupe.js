function dedupe(str) {
    if (typeof str == 'string') {
        let set = new Set();
        for (let i = str.length - 1; i >= 0; i--) {
            set.add(str[i]);
        }
        let s = "";
        set.forEach(v => s += v);
        let k = "";
        for(let i = s.length -1; i >= 0; i--) k += s[i];
        return k;
    }
}

console.log(dedupe("Snaps! crackles! pops!"));