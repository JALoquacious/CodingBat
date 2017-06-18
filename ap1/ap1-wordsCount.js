/*
Given an array of strings, return the count of the number of strings
with the given length.

wordsCount(["a", "bb", "b", "ccc"], 1) → 2
wordsCount(["a", "bb", "b", "ccc"], 3) → 1
wordsCount(["a", "bb", "b", "ccc"], 4) → 0
*/

function wordsCount(array, n) {
    return array.filter(elem => elem.length === n).length;
}

console.log(wordsCount(["a", "bb", "b", "ccc"], 1)); // 2
console.log(wordsCount(["a", "bb", "b", "ccc"], 3)); // 1
console.log(wordsCount(["a", "bb", "b", "ccc"], 4)); // 0