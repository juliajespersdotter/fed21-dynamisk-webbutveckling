/**
 * Calc stuff
 */

const geo = require('./modules/geometry');
console.log("geo:", geo);

let radius = 4;

let area = geo.area(radius);
let circumference = geo.circumference(radius);
console.log(`The area of a circle with radius ${radius} is: ~`, Math.round(area));
console.log(`The circumference of a circle with radius ${radius} is: ~`, Math.round(circumference));