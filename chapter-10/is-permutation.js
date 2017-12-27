function isPermutation(str1, str2) {
    if (typeof str1 == 'string' && typeof str2 == 'string') {
        if(str1.length != str2.length) return false;
        let n1 = 0;
        let n2 = 0;
        for(let i = 0; i < str1.length; i++){
            n1 += str1.charCodeAt(i);
            n2 += str2.charCodeAt(i);
        }
        return n2 == n1;
    }
}

console.log(isPermutation("mister", "sister"));