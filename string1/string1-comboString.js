/*
Given 2 strings, a and b, return a string of the form short+long+short,
with the shorter string on the outside and the longer string on the
inside. The strings will not be the same length, but they may be empty
(length 0).

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"
*/

function comboString(str1, str2) {
    if (str1.length > str2.length) return str2 + str1 + str2;
    else return str1 + str2 + str1;
}

console.log(comboString("Hello", "hi")); // "hiHellohi"
console.log(comboString("hi", "Hello")); // "hiHellohi"
console.log(comboString("aaa", "b")); // "baaab"