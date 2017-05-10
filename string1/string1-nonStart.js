/*
Given 2 strings, return their concatenation, except omit the first char
of each. The strings will be at least length 1.

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"
*/

function nonStart(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}

console.log(nonStart("Hello", "There")); // "ellohere"
console.log(nonStart("java", "code")); // "avaode"
console.log(nonStart("shotl", "java")); // "hotlava"