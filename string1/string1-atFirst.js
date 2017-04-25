/*
Given a string, return a string length 2 made of its first 2 chars. If
the string length is less than 2, use '@' for the missing chars.

atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"
*/

function atFirst(str) {
    if (str.length >= 2) {
        return str.slice(0, 2);
    } else {
        return str + "@".repeat(2 - str.length);
    }
}

console.log(atFirst("hello")); // "he"
console.log(atFirst("hi")); // "hi"
console.log(atFirst("h")); // "h@"
console.log(atFirst("")); // "@@"