/*
Given an array of ints, compute recursively if the array contains
somewhere a value followed in the array by that value times 10. We'll
use the convention of considering only the part of the array that
begins at the given index. In this way, a recursive call can pass
index+1 to move down the array. The initial call will pass in index
as 0.

array220([1, 2, 20], 0) → true
array220([3, 30], 0) → true
array220([3], 0) → false
*/

function array220(array, start) {
    if (array.length < 2 || array.length <= start) { return false; }
    if (array[start] * 10 === array[start + 1])    { return true;  }
    return array220(array, start + 1);
}

console.log(array220([1, 2, 20], 0)); // true
console.log(array220([3, 30], 0)); // true
console.log(array220([3], 0)); // false
console.log(array220([2, 20, 8, 5, 10, 3], 3)); // false
console.log(array220([1, 2, 3, 4, 5, 6, 7, 70, 80, 90], 5)); // true