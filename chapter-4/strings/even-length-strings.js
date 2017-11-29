function evenLengthStrings(arr){
    if(arr instanceof Array){
        let remove = function (index) {
            if(typeof index == 'number'){
                for(let i = index; i < arr.length; i++){
                    arr[i] = arr[i+1];
                }
                arr.length--;
            }
        }
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length % 2 == 0){
                remove(i);
                i--;
            }
        }
        return arr;
    }
}

var array = ['Nope!', 'Its', 'Kris', 'Starting', 'With', 'K!', '(instead','of','chris','with','c)', '.']
evenLengthStrings(array);
console.log(array);