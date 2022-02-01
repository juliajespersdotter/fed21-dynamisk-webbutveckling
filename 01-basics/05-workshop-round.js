/**
 * Round any number into any decimal count
 */

const roundFunction = require('./modules/num');

let number = 3.543234;
let precision = 4;

let roundedNumber = roundFunction.round(number, precision);
console.log(`My number was ${number}, with ${precision} decimals, making:`, roundedNumber);