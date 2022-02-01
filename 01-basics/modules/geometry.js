/**
 * Do all things geometry related
 */

const { PI } = Math; // destructuring PI from Math Object

const area = r => PI * r ** 2;

const circumference = r => 2 * PI * r;

// Exports all the stuff!
module.exports = {
    area,
    circumference,
}