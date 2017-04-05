/*
Given an int array, return true if the array contains 2 twice, or 3
twice. The array will be length 0, 1, or 2.

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false
*/

function double23(array) {
    let x = array[0],
        y = array[1];
    return (x === 2 && y === 2) || (x === 3 && y === 3);
}

console.log(double23([2, 2])); // true
console.log(double23([3, 3])); // true
console.log(double23([2, 3])); // false
console.log(double23([3])); // false