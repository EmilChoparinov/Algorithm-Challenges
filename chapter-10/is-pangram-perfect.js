function isPangramPerfect(str) {
    if (typeof str == 'string') {
        let set = new Set();
        let c = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.toLowerCase().charCodeAt(i) >= 97 && str.toLowerCase().charCodeAt(i) <= 122) {
                set.add(str[i]);
                c++;
            }
        }
        return set.size == 26 && c == 26;
    }
}

console.log(isPangramPerfect("Playing jazz vibe chords quickly excites my wife."));
console.log(isPangramPerfect("Mr. Jock, TV quiz PhD, bags few lynx"));