/*
Given two strings, append them together (known as "concatenation") and
return the result. However, if the strings are different lengths, omit
chars from the longer string so it is the same length as the shorter
string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

minCat("Hello", "Hi") → "loHi"
minCat("Hello", "java") → "ellojava"
minCat("java", "Hello") → "javaello"
*/

function minCat(str1, str2) {
    let len1 = str1.length,
        len2 = str2.length;
    if (len1 > len2) {
        str1 = str1.slice(len1 - len2);
    } else if (len1 < len2) {
        str2 = str2.slice(len2 - len1);
    }
    return str1 + str2;
}

console.log(minCat("Hello", "Hi")); // "loHi"
console.log(minCat("Hello", "java")); // "ellojava"
console.log(minCat("java", "Hello")); // "javaello"