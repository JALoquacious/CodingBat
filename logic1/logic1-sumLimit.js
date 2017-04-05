/*
Given 2 non-negative ints, a and b, return their sum, so long as the sum
has the same number of digits as a. If the sum has more digits than a,
just return a without b.

sumLimit(2, 3) → 5
sumLimit(8, 3) → 8
sumLimit(8, 1) → 9
*/

function sumLimit(a, b) {
    return ((a + b).toString().length === a.toString().length)
        ? a + b : a;
}

console.log(sumLimit(2, 3)); // 5
console.log(sumLimit(8, 3)); // 8
console.log(sumLimit(8, 1)); // 9