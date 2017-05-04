/*
Given a string, return the string made of its first two chars, so the
String "Hello" yields "He". If the string is shorter than length 2,
return whatever there is, so "X" yields "X", and the empty string ""
yields the empty string "".

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"
*/

function firstTwo(str) {
    return str.slice(0,2);
}

console.log(firstTwo("Hello")); // "He"
console.log(firstTwo("abcdefg")); // "ab"
console.log(firstTwo("")); // ""
console.log(firstTwo("z")); // "z"