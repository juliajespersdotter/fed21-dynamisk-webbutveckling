/**
 * Globals
 */

console.log("Hello, world!");
// console.log(global);

setTimeout(() => {
    console.log("I'll be back!");
}, 3000);

let counter = 0;
setInterval(() => {
    counter += 2;
    console.log(`Hello after ${counter} seconds`);
}, 2000);