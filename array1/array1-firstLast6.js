/*
Given an array of ints, return true if 6 appears as either the first or
last element in the array. The array will be length 1 or more.

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*/

function firstLast6(array) {
    return (array[0] === 6 || array[array.length - 1] === 6);
}

console.log(firstLast6([1, 2, 6])); // true
console.log(firstLast6([6, 1, 2, 3])); // true
console.log(firstLast6([13, 6, 1, 2, 3])); // false