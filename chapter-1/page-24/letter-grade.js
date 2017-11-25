/**
 * Parses a percent integer to a letter score
 * @param {Number} grade an integer between 0-100 that represents a grade in percent
 */
function letterGrade(grade) {
    if (typeof grade == 'number') {
        if (grade >= 90) console.log('A');
        else if (grade >= 80) console.log('B');
        else if (grade >= 70) console.log('C');
        else if (grade >= 60) console.log('D');
        else console.log('F')
    }
}

letterGrade(91)
letterGrade(81)
letterGrade(71)
letterGrade(61)
letterGrade(51)
