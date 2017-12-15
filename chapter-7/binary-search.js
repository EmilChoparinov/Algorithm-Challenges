function binarySeach(arr, val) {
    if (arr instanceof Array) {
        let r = 0;
        let l = arr.length -1;
        while(r < l){
            if(arr[r] == val || arr[l] == val) return true;
            if((r+l)/2 <= val){
                r = Math.floor((r+l)/2) + 1;
            }else{
                l = Math.floor((r+l)/2) - 1;
            }
        }
        return false;
    }
}

var arr = [1,2,4,5,8,10,13];
console.log(binarySeach(arr, 13));