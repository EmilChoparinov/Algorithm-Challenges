function mode(arr) {
    if (arr instanceof Array) {
        let dic = {};
        arr.forEach((element) => {
            if(dic[element] == undefined){
                dic[element] = 1;
            }else{
                dic[element] = dic[element] + 1;
            }
        });
        let mean = dic[arr[0]];
        let k = arr[0];
        for(let key in Object.keys(dic)){
            if(dic[key] > mean) {
                mean = dic[key];
            }
        }
        return k;
    }
}

let x= [1,1,1,1,1,1,3,4];
console.log(mode(x));