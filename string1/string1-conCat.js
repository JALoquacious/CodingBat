/*
Given two strings, append them together (known as "concatenation") and
return the result. However, if the concatenation creates a double-char,
then omit one of the chars, so "abc" and "cat" yields "abcat".

conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/

function conCat(str1, str2) {
    if (str1.charAt(str1.length - 1) === str2.charAt(0)) {
        str2 = str2.slice(1);
    }
    return str1 + str2;
}

console.log(conCat("abc", "cat")); // "abcat"
console.log(conCat("dog", "cat")); // "dogcat"
console.log(conCat("abc", "")); // "abc"