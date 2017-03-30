/*
Given a non-negative number "num", return true if num is within 2 of a
multiple of 10.

nearTen(12) → true
nearTen(17) → false
nearTen(19) → true
*/

function nearTen(n) {
    return n % 10 <= 2 || n % 10 >= 8;
}

console.log(nearTen(12)); // true
console.log(nearTen(17)); // false
console.log(nearTen(19)); // true
console.log(nearTen(21)); // true