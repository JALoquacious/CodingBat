/*
Return the number of times that the string "code" appears anywhere in
the given string, except we'll accept any letter for the 'd', so "cope"
and "cooe" count.

countCode("aaacodebbb") → 1
countCode("codexxcode") → 2
countCode("cozexxcope") → 2
*/

function countCode(str) {
    return str.match(/co[a-z]e/g).length;
}

console.log(countCode("aaacodebbb")); // 1
console.log(countCode("codexxcode")); // 2
console.log(countCode("cozexxcope")); // 2