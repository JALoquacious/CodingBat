/*
Given 2 strings, a and b, return a new string made of the first char of
a and the last char of b, so "yo" and "java" yields "ya". If either
string is length 0, use '@' for its missing char.

lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/

function lastChars(str1, str2) {
    return (str1.slice(0, 1) || "@") + (str2.slice(-1) || "@");
}

console.log(lastChars("last", "chars")); // "ls"
console.log(lastChars("yo", "java")); // "ya"
console.log(lastChars("hi", "")); // "h@"
console.log(lastChars("", "test")); // "@t"