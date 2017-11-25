/**
 * Determines whether a given year is a leap year. If a year is divisible by 4 it is a leap year, unless it is divisible by 100. However if it is divisble by 400, then it is
 * @param {Number} year year to check if it is a leap year
 */
function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 400 == 0){
            console.log('a leap year')
        }
        else if(year % 100 == 0){
            console.log('not a leap year')
        }
        else{
            console.log('a leap year')
        }
    }else{
        console.log('not a leap year')
    }
}

isLeapYear(4)
isLeapYear(8)
isLeapYear(100)
isLeapYear(200)
isLeapYear(400)
isLeapYear(800)