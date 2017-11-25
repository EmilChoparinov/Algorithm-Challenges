/**
 * Prints yummy each time food is found. If there is no food, print I'm hungry once
 * @param {Array} arr an array of strings
 */
function alwaysHungery(arr){
    if(arr instanceof Array){
        let hadYum = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === 'food'){
                console.log('yummy')
                hadYum = true;
            }
        }
        if(!hadYum){
            console.log("I'm hungry")
        }
    }
}

alwaysHungery(['food', 'food'])
alwaysHungery(['fooaa', 'fooa'])