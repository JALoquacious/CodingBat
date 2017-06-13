/*
Given an array of scores sorted in increasing order, return true if the
array contains 3 adjacent scores that differ from each other by at most
2, such as with {3, 4, 5} or {3, 5, 5}.

scoresClump([3, 4, 5]) → true
scoresClump([3, 4, 6]) → false
scoresClump([1, 3, 5, 5]) → true
*/

function scoresClump(array) {
    return array.some((elem, idx, arr) =>
        arr[idx + 2] - arr[idx + 1] <= 2 &&
        arr[idx + 2] - arr[idx] <= 2     &&
        arr[idx + 1] - arr[idx] <= 2
    );
}

console.log(scoresClump([3, 4, 5])); // true
console.log(scoresClump([3, 4, 6])); // false
console.log(scoresClump([1, 3, 5, 5])); // true