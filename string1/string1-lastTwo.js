/*
Given a string of any length, return a new string where the last 2
chars, if present, are swapped, so "coding" yields "codign".

lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"
*/

function lastTwo(str) {
    if (str.length < 2) return str;
    return str.slice(0, -2) + str[str.length - 1] + str[str.length - 2];
}

console.log(lastTwo("coding")); // "codign"
console.log(lastTwo("cat")); // "cta"
console.log(lastTwo("ab")); // "ba"
console.log(lastTwo("z")); // "z"