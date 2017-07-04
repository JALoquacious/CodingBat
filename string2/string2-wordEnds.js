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
    let loc = 0,
        idx = 0,
        sub = '',
        out = '';
        
    for (idx = 0; idx < str.length - word.length; idx++) {
        sub = str.substring(idx);
        loc = sub.indexOf(word);
        if (loc > -1) { // word found in string
            out += sub.charAt(loc - 1) + sub.charAt(loc + word.length);
            idx += loc - 1 + word.length; // jump ahead
        }
    }
    return out;
}

console.log(wordEnds("abcXY123XYijk", "XY")); // "c13i"
console.log(wordEnds("XY123XY", "XY")); // "13"
console.log(wordEnds("XY1XY", "XY")); // "11"