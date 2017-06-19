/*
Given an array of strings, return a new array without the strings that
are equal to the target string. One approach is to count the occurrences
of the target string, make a new array of the correct length, and then
copy over the correct strings.

wordsWithout(["a", "b", "c", "a"], "a") → ["b", "c"]
wordsWithout(["a", "b", "c", "a"], "b") → ["a", "c", "a"]
wordsWithout(["a", "b", "c", "a"], "c") → ["a", "b", "a"]
*/

/*
Author's note:

Although I usually enjoy clever one-liners (so long as they're
intelligible), the solution of array.filter(elem => elem !== char)
seemed to be almost cheating for this exercise. It came to mind so
quickly and mindlessly that I knew I'd have to be a little creative
to make this puzzle at all interesting. This solution isn't
fascinating by any means, but it's at least something different.
Also, I'm aware this isn't a pure function, but so be it.
*/

function wordsWithout(array, char) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === char) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    return array;
}

console.log(wordsWithout(["a", "b", "c", "a"], "a")); // ["b", "c"]
console.log(wordsWithout(["a", "b", "c", "a"], "b")); // ["a", "c", "a"]
console.log(wordsWithout(["a", "b", "c", "a"], "c")); // ["a", "b", "a"]