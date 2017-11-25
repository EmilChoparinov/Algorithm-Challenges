/**
 * Parses a percent integer to a letter score
 * @param {Number} grade an integer between 0-100 that represents a grade in percent
 */
function letterGrade(grade) {
    if (typeof grade == 'number') {
        if (grade >= 90) console.log('A');
        else if (grade >= 85) console.log('B+');
        else if (grade >= 80) console.log('B-');
        else if (grade >= 75) console.log('C+');
        else if (grade >= 70) console.log('C-');
        else if (grade >= 65) console.log('D+');
        else if (grade >= 60) console.log('D-');
        else console.log('F')
    }
}

letterGrade(91)
letterGrade(86)
letterGrade(82)
letterGrade(76)
letterGrade(72)
letterGrade(66)
letterGrade(62)
letterGrade(51)
