/*
Given a string, return a new string made of 3 copies of the first 2
chars of the original string. The string may be any length. If there
are fewer than 2 chars, use whatever is there.

extraFront("Hello") → "HeHeHe"
extraFront("ab") → "ababab"
extraFront("H") → "HHH"
*/

function extraFront(str) {
    return str.slice(0,2).repeat(3);
}

console.log(extraFront("Hello")); // "HeHeHe"
console.log(extraFront("ab")); // "ababab"
console.log(extraFront("H")); // "HHH"