/*
Given a string, return true if the first 2 chars in the string also
appear at the end of the string, such as with "edited".

frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/

function frontAgain(str) {
    if (str.length < 2) return false;
    return str.slice(0, 2) === str.slice(-2);
}

console.log(frontAgain("edited")); // true
console.log(frontAgain("edit")); // false
console.log(frontAgain("ed")); // true
console.log(frontAgain("e")); // false