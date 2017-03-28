/*
Given three ints, a b c, return true if one of them is 10 or more less
than one of the others.

lessBy10(1, 7, 11) → true
lessBy10(1, 7, 10) → false
lessBy10(11, 1, 7) → true
*/

function lessBy10(a, b, c) {
    return (Math.abs(a - b) >= 10) ||
           (Math.abs(a - c) >= 10) ||
           (Math.abs(b - c) >= 10);
}

console.log(lessBy10(1, 7, 11)); // true
console.log(lessBy10(1, 7, 10)); // false
console.log(lessBy10(11, 1, 7)); // true