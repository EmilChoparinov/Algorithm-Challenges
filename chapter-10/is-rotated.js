function isRotate(first, second) {
    if (typeof first == 'string' && typeof second == 'string') {
        let n1 = 0, n2 = 0;
        if (first.length != second.length) return false;

        for (let i = 0; i < first.length; i++) {
            n1 += first.charCodeAt(i);
            n2 += second.charCodeAt(i);
        }
        return (n2 == n1);
    }
}

console.log(isRotate("123", "321"));