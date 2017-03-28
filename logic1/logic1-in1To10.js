/*
Given a number n, return true if n is in the range 1..10, inclusive.
Unless "outsideMode" is true, in which case return true if the number
is less or equal to 1, or greater or equal to 10.

in1To10(5, false) → true
in1To10(11, false) → false
in1To10(11, true) → true
*/

function in1To10(num, outMode) {
    return (outMode) ? num < 1 || num > 10 : 1 <= num && num <= 10;
}

console.log(in1To10(5, false)); // true
console.log(in1To10(11, false)); // false
console.log(in1To10(11, true)); // true
console.log(in1To10(7, true)); // false