/**
 * Shuffled an arrays elements n times
 * @param {Array} arr 
 */
function shuffle(arr){
    if(arr instanceof Array){
        for(let i = 0; i < arr.length; i++){
            let shuffleFrom = Math.floor(Math.random()*arr.length);
            let shuffleTo = Math.floor(Math.random()*arr.length);
            let temp = arr[shuffleFrom];
            arr[shuffleFrom] = arr[shuffleTo];
            arr[shuffleTo] = temp
        }
        return arr;
    }
}

for(var i = 0; i < 20; i++){
    console.log(shuffle([1,2,3,4,5,6,7,8,9]))
}