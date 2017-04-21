/*
Given an array of ints, return true if the array is length 1 or more,
and the first element and the last element are equal.

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
*/

function sameFirstLast(array) {
    return array[0] === array[array.length - 1];
}

console.log(sameFirstLast([1, 2, 3])); // false
console.log(sameFirstLast([1, 2, 3, 1])); // true
console.log(sameFirstLast([1, 2, 1])); // true