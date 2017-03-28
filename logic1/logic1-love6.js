/*
The number 6 is a truly great number. Given two int values, a and b,
return true if either one is 6. Or if their sum or difference is 6.

love6(6, 4) → true
love6(4, 5) → false
love6(1, 5) → true
*/

function love6(a, b) {
    return a === 6 || b === 6 || a + b === 6 || Math.abs(a - b) === 6;
}

console.log(love6(6, 4)); // true
console.log(love6(4, 5)); // false
console.log(love6(1, 5)); // true
console.log(love6(13, 7)); // true