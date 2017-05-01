/*
Given a string, return a version without the first 2 chars. Except keep
the first char if it is 'a' and keep the second char if it is 'b'. The
string may be any length. Harder than it looks.

deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/

function deFront(str) {
    if (str.charAt(0) === "a" && str.charAt(1) === "b") {
        return str;
    } else if (str.charAt(0) === "a" && str.charAt(1) !== "b") {
        return "a" + str.slice(2);
    } else if (str.charAt(0) !== "a" && str.charAt(1) === "b") {
        return "b" + str.slice(2);
    } else {
        return str.slice(2);
    }
}

console.log(deFront("Hello")); // "llo"
console.log(deFront("java")); // "va"
console.log(deFront("away")); // "aay"
console.log(deFront("uber")); // "ber"
console.log(deFront("about")); // "about"