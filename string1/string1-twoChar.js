/*
Given a string and an index, return a string length 2 starting at the
given index. If the index is too big or too small to define a string
length 2, use the first 2 chars. The string length will be at least 2.

twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"
*/

function twoChar(str, idx) {
    if (idx < 0 || idx + 2 > str.length) {
        return str.substr(0, 2);
    } else {
        return str.substr(idx, 2);
    }
}

console.log(twoChar("java", 0)); // "ja"
console.log(twoChar("java", 2)); // "va"
console.log(twoChar("java", 3)); // "ja"