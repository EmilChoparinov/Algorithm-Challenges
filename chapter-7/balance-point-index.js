/**
 * Gets the index of the point of balance
 * @param {Array} arr 
 */
function balancePoint(arr){
    if(arr instanceof Array){
        let sumLeft = arr[0];
        let sumRight = arr[arr.length-1];
        let iBalance = 0;
        let c = false;
        for(let i = 1; i < arr.length-2; i++){
            if(sumLeft <= sumRight){
                sumLeft += arr[i];
                iBalance++;
            }
            else if(sumLeft > sumRight){
                c = !c;
                sumRight += arr[arr.length - i];
                i--;
                if(arr[arr.length-i - 1] == 0) i++;
            }
        }
        if(!c){
            if(sumLeft + arr[arr.length-2] == sumRight) return iBalance+1;
        }
        if(sumLeft != sumRight) return -1;
        return iBalance;
    }
}

var arr = [1,2,3,4,10];
console.log(balancePoint(arr));


var arr = [1,2,4,6,1];
console.log(balancePoint(arr));