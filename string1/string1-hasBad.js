/*
Given a string, return true if "bad" appears starting at index 0 or 1
in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The
string may be any length, including 0.

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/

function hasBad(str) {
    return str.substr(0, 3) === "bad" || str.substr(1, 3) === "bad";
}

console.log(hasBad("badxx")); // true
console.log(hasBad("xbadxx")); // true
console.log(hasBad("xxbadxx")); // false
console.log(hasBad("")); // false