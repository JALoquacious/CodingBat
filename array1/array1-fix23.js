/*
Given an int array length 3, if there is a 2 in the array immediately
followed by a 3, set the 3 element to 0. Return the changed array.

fix23([1, 2, 3]) → [1, 2, 0]
fix23([2, 3, 5]) → [2, 0, 5]
fix23([1, 2, 1]) → [1, 2, 1]
*/

function fix23(array) {
    return array.map(function(elem, idx, arr) {
        if (arr[idx] === 2 && arr[idx + 1] === 3) {
            arr[idx + 1] = 0;
        }
        return elem;
    });
}

console.log(fix23([1, 2, 3])); // [1, 2, 0]
console.log(fix23([2, 3, 5])); // [2, 0, 5]
console.log(fix23([1, 2, 1])); // [1, 2, 1]