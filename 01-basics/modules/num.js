/**
 * Rounding function
 */

// 10 ** (parameter --> decides how many decimals)
// 

/*
const roundWith1Decimal = num => Math.round(num * 10) / 10;
const roundWith2Decimal = num => Math.round(num * 100) / 100;
*/

const round = (number, precision) => {
    let decimal = 10 ** precision; 
    return Math.round(number * decimal) / decimal;
}

module.exports = {
    round,
}