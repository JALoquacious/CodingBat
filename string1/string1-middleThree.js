/*
Given a string of odd length, return the string length 3 from its
middle, so "Candy" yields "and". The string length will be at least 3.

middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"
*/

function middleThree(str) {
    return str.substr(str.length / 2 - 1, 3);
}

console.log(middleThree("Candy")); // "and"
console.log(middleThree("and")); // "and"
console.log(middleThree("solving")); // "lvi"