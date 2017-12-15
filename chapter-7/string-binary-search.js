function binarySearch(str, char){
    if(typeof str == "string"){
        let l = 0;
        let r = str.length - 1;
        while(l < r){
            let mid = Math.floor((l+r)/2);
            if(str[l] == char) return true;
            if(str.charCodeAt(mid) > char){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
        return false;
    }
}

var str = "&-0379DEFXA[abcz|"
console.log(binarySeach(str, "6"));