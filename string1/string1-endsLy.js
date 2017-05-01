/*
Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/

function endsLy(str) {
    return str.slice(-2) === "ly";
}

console.log(endsLy("oddly")); // true
console.log(endsLy("y")); // false
console.log(endsLy("oddy")); // false
console.log(endsLy("exponentially")); // true