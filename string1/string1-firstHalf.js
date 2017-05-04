/*
Given a string of even length, return the first half. So the string
"WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/

function firstHalf(str) {
    return str.slice(0, str.length / 2);
}

console.log(firstHalf("WooHoo")); // "Woo"
console.log(firstHalf("HelloThere")); // "Hello"
console.log(firstHalf("abcdef")); // "abc"