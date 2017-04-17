/*
Given an array of ints of odd length, look at the first, last, and
middle values in the array and return the largest. The array length
will be a least 1.

maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3]) → 5
maxTriple([5, 2, 3]) → 5
*/

function maxTriple(array) {
    return Math.max.apply(null, array);
}

console.log(maxTriple([1, 2, 3])); // 3
console.log(maxTriple([1, 5, 3])); // 5
console.log(maxTriple([5, 2, 3])); // 5