/*
Given a string, return a version without both the first and last char of
the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/

function withouEnd2(str, flag) {
    return str.slice(1, -1);
}

console.log(withouEnd2("Hello")); // "ell"
console.log(withouEnd2("abc")); // "b"
console.log(withouEnd2("ab")); // ""