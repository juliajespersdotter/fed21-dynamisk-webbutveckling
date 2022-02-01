/**
 * Do all things geometry related
 */

const { PI } = Math; // destructuring PI from Math Object
const num = require('./num');

const area = r => PI * r ** 2;

const circumference = r => 2 * PI * r;

const approxArea = (r, precision) => num.round(area(r), precision);
const approxCirc = (r, precision) => num.round(circumference(r), precision);

// Exports all the stuff!
module.exports = {
    area,
    circumference,
    approxArea,
    approxCirc,
}