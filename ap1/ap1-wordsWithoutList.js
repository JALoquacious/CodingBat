/*
Given an array of strings, return a new List (e.g. an ArrayList) where
all the strings of the given length are omitted. See wordsWithout()
below which is more difficult because it uses arrays.

wordsWithoutList(["a", "bb", "b", "ccc"], 1) → ["bb", "ccc"]
wordsWithoutList(["a", "bb", "b", "ccc"], 3) → ["a", "bb", "b"]
wordsWithoutList(["a", "bb", "b", "ccc"], 4) → ["a", "bb", "b", "ccc"]
*/

function wordsWithoutList(array, n) {
    return array.filter(elem => elem.length !== n);
}

console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 1));
// ["bb", "ccc"]
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 3));
// ["a", "bb", "b"]
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 4) );
// ["a", "bb", "b", "ccc"]