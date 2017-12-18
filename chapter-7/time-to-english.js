/**
 * parses minutes since midnight to readable english
 * @param {Number} m minutes since midnight
 */
function timeToEnglish(m) {
    let hour = Math.floor(m / 60) % 24;
    let minute = m % 60;

    let minuteType = "";
    switch (minute) {
        case minute % 15 == 0:
            minuteType = "quarter"
        case 30:
            minuteType = "half"
            break;
        default:
            if (minute >= 30) minuteType = (60 - minute) + "";
            else minuteType = minute + "";
    }
    if (minute % 15 == 0) {
        minuteType = "quarter";
    }
    if (minute === 30) {
        minuteType = "half";
    }

    let hourType = "";
    switch (hour) {
        case 0:
            hourType = "midnight";
            break;
        case 12:
            hourType = "noon";
            break;
        case 11:
            if (minute >= 30) hourType = "noon";
            else hourType = hour + "";
            break;
        default:
            if(minute >= 30) hourType = (hour + 1) % 12 + "";
            else hourType = hour + "";
    }
    let meridian = "";
    if(hour > 12) meridian = "PM";
    else meridian = "AM";
    estimationType = "";
    if (minute <= 30) {
        estimationType = "past";
    }
    if (minute > 30) {
        estimationType = "til";
    }
    console.log(`${minuteType} ${estimationType} ${hourType} ${meridian}`);
}

timeToEnglish(30);
timeToEnglish(75);
timeToEnglish(710);
timeToEnglish(1000);