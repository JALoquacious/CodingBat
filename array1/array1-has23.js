/*
Given an int array length 2, return true if it contains a 2 or a 3.

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
*/

function has23(array) {
    return !!(array.filter(i => i === 2 || i === 3).length);
}

console.log(has23([2, 5])); // true
console.log(has23([4, 3])); // true
console.log(has23([4, 5])); // false