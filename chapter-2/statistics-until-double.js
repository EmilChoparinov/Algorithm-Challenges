/**
 * Gets a pseudorandom number in [1,20]
 */
function rollOne() {
    return Math.floor(Math.random() * 20 + 1);
}

/**
 * Gets statistics of rolls until the next recurrent number
 */
function getStatistic(){
    let max = 0, min = 21, sum = 0, rolls = 0; 
    let numbersRecieved = {}
    let roll = rollOne()
    while(!(roll in numbersRecieved)){
        numbersRecieved[roll] = 'recieved';
        if(roll > max) max = roll;
        if(roll < min) min = roll;
        sum += roll;
        rolls++;
        roll = rollOne()
    }
    console.log(`Total rolls: ${rolls}\nMax: ${max}\nMin: ${min}\nAverage: ${sum/rolls}`)
}

getStatistic()