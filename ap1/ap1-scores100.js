/*
Given an array of scores, return true if there are scores of 100 next
to each other in the array. The array length will be at least 2.

scores100([1, 100, 100]) → true
scores100([1, 100, 99, 100]) → false
scores100([100, 1, 100, 100]) → true
*/

function scores100(array) {
    return array.some((elem, idx, arr) =>
        arr[idx] === 100 && arr[idx + 1] === 100);
}

console.log(scores100([1, 100, 100])); // true
console.log(scores100([1, 100, 99, 100])); // false
console.log(scores100([100, 1, 100, 100])); // true