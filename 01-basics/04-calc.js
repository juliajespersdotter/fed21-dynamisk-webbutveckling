/**
 * Calc stuff
 */

const geo = require('./modules/geometry');
console.log("geo:", geo);

let radius = 4;

let area = geo.area(radius);
let approxArea = Math.round(area * 10) / 10;
let circumference = geo.circumference(radius);
let approxCircum = Math.round(circumference * 10) /10;
console.log(`The area of a circle with radius ${radius} is: ~`, approxArea);
console.log(`The circumference of a circle with radius ${radius} is: ~`, approxCircum);