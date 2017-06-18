/*
Given an array of strings, return a new array containing the first N
strings. N will be in the range 1..length.

wordsFront(["a", "b", "c", "d"], 1) → ["a"]
wordsFront(["a", "b", "c", "d"], 2) → ["a", "b"]
wordsFront(["a", "b", "c", "d"], 3) → ["a", "b", "c"]
*/

function wordsFront(array, n) {
    return array.slice(0, n);
}

console.log(wordsFront(["a", "b", "c", "d"], 1)); // ["a"]
console.log(wordsFront(["a", "b", "c", "d"], 2)); // ["a", "b"]
console.log(wordsFront(["a", "b", "c", "d"], 3)); // ["a", "b", "c"]