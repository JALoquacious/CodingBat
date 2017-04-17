/*
Given an array of ints of even length, return a new array length 2
containing the middle two elements from the original array. The original
array will be length 2 or more.

makeMiddle([1, 2, 3, 4]) → [2, 3]
makeMiddle([7, 1, 2, 3, 4, 9]) → [2, 3]
makeMiddle([1, 2]) → [1, 2]
*/

function makeMiddle(array) {
    return Array(array[array.length / 2] - 1, array[array.length / 2]);
}

console.log(makeMiddle([1, 2, 3, 4])); // [2, 3]
console.log(makeMiddle([7, 1, 2, 3, 4, 9])); // [2, 3]
console.log(makeMiddle([1, 2])); // [1, 2]