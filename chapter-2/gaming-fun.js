/**
 * Gets a pseudorandom number in [1,6]
 */
function rollOne() {
    return Math.floor(Math.random() * 6 + 1);
}

/**
 * Rolls a certain amount of times and if you roll 5 give a 'Thats good luck!' message
 * @param {Number} num total rolls
 */
function playFives(num){
    for(let roll = 0; roll < num; roll++){
        let currentRoll = rollOne();
        let response = `Your roll was ${currentRoll}. `;
        if(currentRoll === 5){
            response += 'Thats good luck!'
        }
        console.log(response);
    }
}

/**
 * Find the highest and lowest rolls of a set of 8 rolls
 */
function playStatistics(){
    let highest = 0, lowest = 7;
    for(let roll = 0; roll < 8; roll++){
        let currentRoll = rollOne()
        if(currentRoll > highest) highest = currentRoll;
        if(currentRoll < lowest) lowest = currentRoll;
    }
    console.log(`The highest was ${highest}.\nThe lowest was ${lowest}`)
}

/**
 * Find the highest, lowest, and sum of the rolls of a set of 8 rolls
 */
function playStatistics2(){
    let highest = 0, lowest = 7, sum = 0;
    for(let roll = 0; roll < 8; roll++){
        let currentRoll = rollOne()
        if(currentRoll > highest) highest = currentRoll;
        if(currentRoll < lowest) lowest = currentRoll;
        sum += currentRoll;
    }
    console.log(`The highest was ${highest}.\nThe lowest was ${lowest}\nThe sum was ${sum}`)
}

/**
 * Finds the highest, lowest, and sum of the rolls of a set of n rolls
 * @param {Number} num total rolls
 */
function playStatistics3(num){
    let highest = 0, lowest = 7, sum = 0;
    for(let roll = 0; roll < num; roll++){
        let currentRoll = rollOne()
        if(currentRoll > highest) highest = currentRoll;
        if(currentRoll < lowest) lowest = currentRoll;
        sum += currentRoll;
    }
    console.log(`The highest was ${highest}.\nThe lowest was ${lowest}\nThe sum was ${sum}`)
}

/**
 * Finds the average of a set of n rolls
 * @param {Number} num total rolls
 */
function playStatistics4(num){
    let sum = 0;
    for(let roll = 0; roll < num; roll++){
        let currentRoll = rollOne()
        sum += currentRoll;
    }
    console.log(`The average roll was ${sum/num}`)
}

playStatistics4(10000)