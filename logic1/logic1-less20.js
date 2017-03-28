/*
Return true if the given non-negative number is 1 or 2 less than a
multiple of 20. So for example 38 and 39 return true, but 40 returns
false.

less20(18) → true
less20(19) → true
less20(20) → false
*/

function less20(n) {
    return (n + 1) % 20 === 0 || (n + 2) % 20 === 0;
}

console.log(less20(18)); // true
console.log(less20(19)); // true
console.log(less20(20)); // false
console.log(less20(21)); // false