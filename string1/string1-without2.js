/*
Given a string, if a length 2 substring appears at both its beginning
and end, return a string without the substring at the beginning, so
"HelloHe" yields "lloHe". The substring may overlap with itself, so
"Hi" yields "". Otherwise, return the original string unchanged.

without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*/

function without2(str) {
    if (str.slice(0, 2) === str.slice(-2)) {
        return str.slice(2);
    }
    return str;
}

console.log(without2("HelloHe")); // "lloHe"
console.log(without2("HelloHi")); // "HelloHi"
console.log(without2("Hi")); // ""