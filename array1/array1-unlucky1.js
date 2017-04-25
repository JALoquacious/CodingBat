/*
We'll say that a 1 immediately followed by a 3 in an array is an
"unlucky" 1. Return true if the given array contains an unlucky 1 in
the first 2 or last 2 positions in the array.

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false
*/

function unlucky1(array) {
    return array.some(function(elem, idx, arr) {
        return (
            arr[idx] === 1 &&
            arr[idx + 1] === 3 &&
            [0, 1, arr.length - 2, arr.length - 1].indexOf(idx) !== -1
        );
    });
}

console.log(unlucky1([1, 3, 4, 5])); // true
console.log(unlucky1([2, 1, 3, 4, 5])); // true
console.log(unlucky1([3, 1, 1, 1, 3, 1])); // false
console.log(unlucky1([1, 1, 1])); // false
console.log(unlucky1([1, 2, 3, 1, 3, 1, 3, 2, 1])); // false