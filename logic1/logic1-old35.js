/*
Return true if the given non-negative number is a multiple of 3 or 5,
but not both.

old35(3) → true
old35(10) → true
old35(15) → false
*/

function old35(n) {
    return (n % 3 === 0 || n % 5 === 0) && (n % 3 !== n % 5);
}

console.log(old35(3)); // true
console.log(old35(10)); // true
console.log(old35(15)); // false
console.log(old35(7)); // false