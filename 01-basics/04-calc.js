/**
 * Calc stuff
 */

const geo = require('./modules/geometry');
const roundFunction = require('./modules/num');
console.log("geo:", geo);

let radius = 4;
let area = geo.area(radius);
let circumference = geo.circumference(radius);
let approxArea = roundFunction.round(area, 2);
let approxCircum = roundFunction.round(circumference, 2);

console.log(`The area of a circle with radius ${radius} is: ~`, approxArea);
console.log(`The circumference of a circle with radius ${radius} is: ~`, approxCircum);