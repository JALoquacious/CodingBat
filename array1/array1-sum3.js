/*
Given an array of ints length 3, return the sum of all the elements.

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
*/

function sum3(array) {
    return array.reduce((a, b) => a + b);
}

console.log(sum3([1, 2, 3])); // 6
console.log(sum3([5, 11, 2])); // 18
console.log(sum3([7, 0, 0])); // 7