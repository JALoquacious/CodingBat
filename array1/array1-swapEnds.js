/*
Given an array of ints, swap the first and last elements in the array.
Return the modified array. The array length will be at least 1.

swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
swapEnds([1, 2, 3]) → [3, 2, 1]
swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]
*/

function swapEnds(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}

console.log(swapEnds([1, 2, 3, 4])); // [4, 2, 3, 1]
console.log(swapEnds([1, 2, 3])); // [3, 2, 1]
console.log(swapEnds([8, 6, 7, 9, 5])); // [5, 6, 7, 9, 8]
console.log(swapEnds([1])); // [1]