/**
 * Rounding function
 */

// 10 ** (parameter --> decides how many decimals)
// 

const round = (number, precision) => {
    let decimal = 10 ** precision; 
    return Math.round(number * decimal) / decimal;
}

module.exports = {
    round,
}