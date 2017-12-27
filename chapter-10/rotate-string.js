function rotateString(str, k) {
    if (typeof str == 'string') {
        let front = substring(str, 0, str.length - k);
        let end = substring(str, str.length - k, str.length);
        return end + front;
    }
}

function substring(str, start, end) {
    if (typeof str == 'string' && typeof start == 'number' && typeof end == 'number') {
        if (start >= 0 && start <= end && end > start && end <= str.length) {
            let s = "";
            for (let i = start; i < end; i++) {
                s += str[i];
            }
            return s;
        }
        return undefined;
    }
    return undefined;
}

console.log(rotateString("Boris Godunov", 5));