/*
Start with 2 int arrays, a and b, each length 2. Consider the sum of the
values in each array. Return the array which has the largest sum. In
event of a tie, return a.

biggerTwo([1, 2], [3, 4]) → [3, 4]
biggerTwo([3, 4], [1, 2]) → [3, 4]
biggerTwo([1, 1], [1, 2]) → [1, 2]
*/

function biggerTwo(arr1, arr2) {
    let nested = [arr1, arr2];
    let sums = nested.map(function(elem, idx, arr) {
        return elem.reduce(function(a, b) {
            return a + b;
        });
    });
    return nested[sums.indexOf(Math.max(...sums))];
}

console.log(biggerTwo([1, 2], [3, 4])); // [3, 4]
console.log(biggerTwo([3, 4], [1, 2])); // [3, 4]
console.log(biggerTwo([1, 1], [1, 2])); // [1, 2]
console.log(biggerTwo([3, 6, 9], [2, 4, 8, 16])); // [2, 4, 8, 16]