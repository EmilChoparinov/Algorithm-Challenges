/**
 * Returns true if array can be balanced
 * @param {Array} arr 
 */
function balanceIndex(arr){
    if(arr instanceof Array){
        let sumLeft = arr[0];
        let sumRight = arr[arr.length-1];
        let c = false;
        for(let i = 1; i < arr.length-2; i++){
            if(sumLeft <= sumRight){
                sumLeft += arr[i];
            }
            else if(sumLeft > sumRight){
                c = !c;
                sumRight += arr[arr.length - i];
                i--;
            }
        }
        console.log(sumLeft, sumRight);
        if(!c){
            if(sumLeft + arr[arr.length-2] == sumRight) return true;
        }
        if(sumLeft != sumRight) return false;
        return true;
    }
}

var arr = [1,2,3,4,10];
console.log(balanceIndex(arr));


var arr = [1,2,4,6,1];
console.log(balanceIndex(arr));