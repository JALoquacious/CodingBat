/*
Given a string, if one or both of the first 2 chars is 'x', return the
string without those 'x' chars, and otherwise return the string
unchanged. This is a little harder than it looks.

withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*/

function withoutX2(str) {
    let result = "";
    if (str[0] !== "x") result += str[0];
    if (str[1] !== "x") result += str[1];
    result += str.slice(2);
    return result;
}

console.log(withoutX2("xHi")); // "Hi"
console.log(withoutX2("Hxi")); // "Hi"
console.log(withoutX2("Hi")); // "Hi"
console.log(withoutX2("xxAlexanderx")); // "Alexander"