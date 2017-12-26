/**
 * 
 * @param {Number} totalChange change in terms of pennies
 * @param {Array} solution memo to keep answers
 * @param {Change} curChange memo change object
 */
function generateAllPossibleCoinChange(totalChange, solution = [], curChange = new Change()) {
    if (curChange.total() > totalChange) return;
    if (totalChange == curChange.total()) return solution.push(curChange);
    if (curChange.dimes == 0 && curChange.nickels == 0 && curChange.pennies == 0) {
        generateAllPossibleCoinChange(totalChange, solution, curChange.addType("quarter", 1));
    }

    if (curChange.nickels == 0 && curChange.pennies == 0) {
        generateAllPossibleCoinChange(totalChange, solution, curChange.addType("dime", 1));
    }

    if (curChange.pennies == 0) {
        generateAllPossibleCoinChange(totalChange, solution, curChange.addType("nickel", 1));
    }
    generateAllPossibleCoinChange(totalChange, solution, curChange.addType("penny", 1));
    return solution;
}

class Change {
    constructor() {
        this.quarters = 0;
        this.dimes = 0;
        this.nickels = 0;
        this.pennies = 0;
    }

    total() {
        return this.quarters * 25 + this.dimes * 10 + this.nickels * 5 + this.pennies;
    }
    addType(type, value) {
        let n = new Change();
        n.dimes = this.dimes;
        n.nickels = this.nickels;
        n.pennies = this.pennies;
        n.quarters = this.quarters;

        switch (type) {
            case "quarter":
                n.quarters += value;
                break;
            case "dime":
                n.dimes += value;
                break;
            case "nickel":
                n.nickels += value;
                break;
            case "penny":
                n.pennies += value;
                break;
        }
        return n;
    }
}

console.log(generateAllPossibleCoinChange(78));
