/*
Given an int array, return a new array with double the length where its
last element is the same as the original array, and all the other
elements are 0. The original array will be length 1 or more.

makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3]
*/

function makeLast(array) {
    return new Array(array.length * 2 - 1)
        .fill(0)
        .concat(array[array.length - 1]);
}

console.log(makeLast([4, 5, 6])); // [0, 0, 0, 0, 0, 6]
console.log(makeLast([1, 2])); // [0, 0, 0, 2]
console.log(makeLast([3])); // [0, 3]