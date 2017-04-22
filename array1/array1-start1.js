/*
Start with 2 int arrays, a and b, of any length. Return how many of the
arrays have 1 as their first element.

start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1
*/

function start1(arr1, arr2) {
    return [arr1, arr2].filter(function(internal) {
        return internal[0] === 1;
    }).length;
}

console.log(start1([1, 2, 3], [1, 3])); // 2
console.log(start1([7, 2, 3], [1])); // 1
console.log(start1([1, 2], [])); // 1