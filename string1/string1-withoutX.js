/*
Given a string, if the first or last chars are 'x', return the string
without those 'x' chars, and otherwise return the string unchanged.

withoutX("xHix") → "Hi"
withoutX("xHi") → "Hi"
withoutX("Hxix") → "Hxi"
*/

function withoutX(str) {
    if (str.charAt(0) === "x" && str.charAt(str.length - 1) === "x") {
        return str.slice(1, -1);
    } else if (str.charAt(0) === "x") {
        return str.slice(1);
    } else if (str.charAt(str.length - 1) === "x") {
        return str.slice(0, -1);
    } else {
        return str;
    }
}

console.log(withoutX("xHix")); // "Hi"
console.log(withoutX("xHi")); // "Hi"
console.log(withoutX("Hxix")); // "Hxi"
console.log(withoutX("Alexanderx")); // "Alexander"