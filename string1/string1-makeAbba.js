/*
Given two strings, a and b, return the result of putting them together
in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/

function makeAbba(a, b) {
    return `${a}${b}${b}${a}`;
}

console.log(makeAbba("Hi", "Bye")); // "HiByeByeHi"
console.log(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
console.log(makeAbba("What", "Up")); // "WhatUpUpWhat"