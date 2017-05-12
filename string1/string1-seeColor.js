/*
Given a string, if the string begins with "red" or "blue" return that
color string, otherwise return the empty string.

seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"
*/

function seeColor(str) {
    let match = /^(red|blue).*$/.exec(str);
    return match ? match[1] : "";
}

console.log(seeColor("redxx")); // "red"
console.log(seeColor("xxred")); // ""
console.log(seeColor("blueTimes")); // "blue"