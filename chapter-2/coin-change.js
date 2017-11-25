/**
 * Representation of the smallest amount of coins
 * @param {Number} num coins total in pennies
 */
function coinChange(num) {
    var ideal = {
        'quarters': 0,
        'dimes': 0,
        'nickles': 0,
        'pennies': 0,
    };

    ideal['quarters'] = (num - num % 25) / 25;
    num = num % 25;
    ideal['dime'] = (num - num % 10) / 10;
    num = num % 10;
    ideal['nickles'] = (num - num % 5) / 5;
    ideal['pennies'] = num % 5;

    return ideal;
}

console.log(coinChange(74))