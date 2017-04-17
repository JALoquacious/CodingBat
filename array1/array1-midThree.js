/*
Given an array of ints of odd length, return a new array length 3
containing the elements from the middle of the array. The array length
will be at least 3.

midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
midThree([1, 2, 3]) → [1, 2, 3]
*/

function midThree(array) {
    let mid = Math.floor((array.length - 1) / 2);
    return array.slice(mid - 1, mid - 1 + 3);
}

console.log(midThree([1, 2, 3, 4, 5])); // [2, 3, 4]
console.log(midThree([8, 6, 7, 5, 3, 0, 9])); // [7, 5, 3]
console.log(midThree([1, 2, 3])); // [1, 2, 3]