/*
Given a string, return a string length 1 from its front, unless front is
false, in which case return a string length 1 from its back. The string
will be non-empty.

theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"
*/

function theEnd(str, flag) {
    return (flag) ? str.slice(0,1) : str.slice(-1);
}

console.log(theEnd("Hello", true)); // "H"
console.log(theEnd("Hello", false)); // "o"
console.log(theEnd("oh", true)); // "o"