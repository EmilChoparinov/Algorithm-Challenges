function isStringInterleaved(inter1, inter2, output) {
    if (typeof inter1 == 'string' && typeof inter2 == 'string' && typeof output == 'string') {
        for (let i = 0; i < output.length; i += 2) {
            if (inter1[i/2] != output[i] || inter2[i/2] != output[i + 1]) return false;
        }
        return true;
    }
}

console.log(isStringInterleaved("dne", "ail", "daniel"));
console.log(isStringInterleaved("dne", "ail", "daaaaaaniel"));