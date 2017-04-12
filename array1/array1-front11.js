/*
Given 2 int arrays, a and b, of any length, return a new array with the
first element of each array. If either array is length 0, ignore that
array.

front11([1, 2, 3], [7, 9, 8]) → [1, 7]
front11([1], [2]) → [1, 2]
front11([1, 7], []) → [1]
*/

function front11(arr1, arr2) {
    return [arr1[0], arr2[0]].filter(function(val) {
        return Number(val);
    });
}

console.log(front11([1, 2, 3], [7, 9, 8])); // [1, 7]
console.log(front11([1], [2])); // [1, 2]
console.log(front11([1, 7], [])); // [1]
console.log(front11([], [3])); // [3]