function removeDups(arr){
    if(arr instanceof Array){
        let set = new Set();
        arr.forEach((element) => set.add(element));
        let r = [];
        set.forEach((value) => r.push(value));
        return r;
    }
}
function removeDupsInPlace(arr){
    if(arr instanceof Array){
        let set = new Set();
        let removeIndex = function (index){
            if(typeof index == 'number'){
                for(let i = index; i < arr.length; i++){
                    arr[i] = arr[i+1];
                }
                arr.length--;
            }
        }
        for(let i = 0; i < arr.length; i++){
            if(set.has(arr[i])){
                removeIndex(i);
            }else{
                set.add(arr[i]);
            }
        }
        return arr;
    }
}
var x = [1,2,1,3,4,2];
console.log(removeDups(x));
console.log(removeDupsInPlace(x));