/**
 * Tells you if you guessed my birthday right
 * @param {Number} month month of the year
 * @param {Number} day day of the month
 */
function birthday(month, day){
    if(month == 2 && day == 16){
        console.log('how did you know?')
    }else{
        console.log('just another day..')
    }
}

birthday(1,2)
birthday(2,16)