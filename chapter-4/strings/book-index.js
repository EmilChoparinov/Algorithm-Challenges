function bookIndex(arr) {
    if (arr instanceof Array) {
        let str = "";
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1] - 1) {
                if (i == 0) {
                    str += `${arr[i]}-`
                } else {
                    str += `, ${arr[i]}-`
                }
                while (arr[i] == arr[i + 1] - 1) {
                    i++;
                }
                str += arr[i];
            } else {
                if(i == 0){
                    str += arr[i];
                }else{
                    str += `, ${arr[i]}`;
                }
            }
        }
        return str;
    }
}

console.log(bookIndex([1, 2, 13, 14, 15, 37, 38, 70]));