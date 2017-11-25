/**
 * finds the angle of the hands in degrees by time past from initial 12:00:00
 * @param {Number} seconds total seconds passed from 12:00:00
 */
function clockHandAngles(seconds){
    let dMin = seconds / 60;
    let dHour = dMin / 60;
    let dTMin = (dMin%60) * 6;
    let dTHour = (dHour%12) * 30;
    let dTSec = (seconds%60) * 6;
    return `Hour hand: ${dTHour}. Minute hand: ${dTMin}. Second hand: ${dTSec}.`
}

console.log(clockHandAngles(119730))