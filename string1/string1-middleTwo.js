/*
Given a string of even length, return a string made of the middle two
chars, so the string "string" yields "ri". The string length will be
at least 2.

middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/

function middleTwo(str) {
    let mid = str.length / 2;
    return str.slice(mid - 1, mid + 1);
}

console.log(middleTwo("string")); // "ri"
console.log(middleTwo("code")); // "od"
console.log(middleTwo("Practice")); // "ct"