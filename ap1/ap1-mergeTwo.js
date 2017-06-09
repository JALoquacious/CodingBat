/*
Start with two arrays of strings, A and B, each with its elements in
alphabetical order and without duplicates. Return a new array containing
the first N elements from the two arrays. The result array should be in
alphabetical order and without duplicates. A and B will both have a
length which is N or more. The best "linear" solution makes a single
pass over A and B, taking advantage of the fact that they are in
alphabetical order, copying elements directly to the new array.

mergeTwo(["a", "c", "z"], ["b", "f", "z"], 3) → ["a", "b", "c"]
mergeTwo(["a", "c", "z"], ["c", "f", "z"], 3) → ["a", "c", "f"]
mergeTwo(["f", "g", "z"], ["c", "f", "g"], 3) → ["c", "f", "g"]
*/

function mergeTwo(array1, array2, numElems) {
    let result = [],
        maxLen = Math.max(array1.length, array2.length);
    for (let i = 0; i < maxLen; i++) {
        if (result.indexOf(array1[i]) === -1 && array1[i] < array2[i]) {
            result.push(array1[i]);
        }
        if (result.indexOf(array2[i]) === -1) {
            result.push(array2[i]);
        }
    }
    return result.slice(0, numElems);
}

console.log(mergeTwo(["a", "c", "z"], ["b", "f", "z"], 3));
// ["a", "b", "c"]
console.log(mergeTwo(["a", "c", "z"], ["c", "f", "z"], 3));
// ["a", "c", "f"]
console.log(mergeTwo(["f", "g", "z"], ["c", "f", "g"], 3));
// ["c", "f", "g"]
console.log(mergeTwo(["l", "n", "p"],["m", "o", "q", "r", "s"], 7));
// ["l", "m", "n", "o", "p", "q", "r"]