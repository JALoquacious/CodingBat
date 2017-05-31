/*
Given an array of positive ints, return a new array of length "count"
containing the first even numbers from the original array. The original
array will contain at least "count" even numbers.

copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]
copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]
copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]
*/

function copyEvens(array, n) {
    return array.filter(elem => elem % 2 === 0).slice(0, n);
}

console.log(copyEvens([3, 2, 4, 5, 8], 2)); // [2, 4]
console.log(copyEvens([3, 2, 4, 5, 8], 3)); // [2, 4, 8]
console.log(copyEvens([6, 1, 2, 4, 5, 8], 3)); // [6, 2, 4]