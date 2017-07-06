/*
Given a string and a non-empty word string, return a string made of
each char just before and just after every appearance of the word in
the string. Ignore cases where there is no char before or after the
word, and a char may be included twice if it is between two words.

wordEnds("abcXY123XYijk", "XY") → "c13i"
wordEnds("XY123XY", "XY") → "13"
wordEnds("XY1XY", "XY") → "11"
*/

function wordEnds(str, word) {
    return str.split('').reduce(function(acc, _, idx, arr) {
        if (arr.slice(idx, idx + word.length).join('') === word) {
            // [] accounts for undefined array indexes
            acc += (arr[idx - 1] || [])
                .concat(arr[idx + word.length] || []);
        }
        return acc;
    }, '');
}

console.log(wordEnds("abcXY123XYijk", "XY")); // "c13i"
console.log(wordEnds("XY123XY", "XY")); // "13"
console.log(wordEnds("XY1XY", "XY")); // "11"