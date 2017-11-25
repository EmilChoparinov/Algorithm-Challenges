/**
 * Finds the price you must pay according to josh's discount offers
 * @param {Number} num total number of shirts
 */
function sweatShirtPricing(num){
    let totalCost = num * 20;
    let setDiscount = 1;
    if(num == 2) setDiscount = .9;
    else if(num == 3) setDiscount = .19;
    else if(num >= 4) setDiscount = .35;
    return Math.ceil(totalCost*setDiscount);
}

console.log(sweatShirtPricing(1))