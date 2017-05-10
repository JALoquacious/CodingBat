/*
Given a string and an int n, return a string made of the first and last
n chars from the string. The string length will be at least n.

nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"
*/

function nTwice(str, n) {
    return str.slice(0, n) + str.slice(-n);
}

console.log(nTwice("Hello", 2)); // "Helo"
console.log(nTwice("Chocolate", 3)); // "Choate"
console.log(nTwice("Chocolate", 1)); // "Ce"