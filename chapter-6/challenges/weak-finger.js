const referece = require("./stack-queue-reference");
var SLStack = referece.SLStack;
var SLQueue = referece.SLQueue;

/**
 * finds the count of times you can move your finger under a given weak fingers limitations
 * @param {Number} finger the weak finger
 * @param {Number} times times you can switch the weak fingers position
 */
function weakFinger(finger, times) {
    if (typeof finger == "number" && typeof times == "number") {
        let count = 0;
        let fingerSeen = 0;
        while(fingerSeen <= times){
            for(let i = 1; i <=5; i++){
                if(finger == i) fingerSeen++;
                if(fingerSeen > times) return count;
                count++;
            }
            for(let i = 4; i >= 1; i--){
                if(finger == i) fingerSeen++;
                if(fingerSeen > times) return count;
                count++;
            }
        }
        return count;
    }
}

console.log(weakFinger(5, 0));

console.log(weakFinger(2, 1));
