/*
Given two ints, each in the range 10..99, return true if there is a
digit that appears in both numbers, such as the 2 in 12 and 23. (Note:
division, e.g. n/10, gives the left digit while the % "mod" n%10 gives
the right digit.)

shareDigit(12, 23) → true
shareDigit(12, 43) → false
shareDigit(12, 44) → false
*/

function shareDigit(a, b) {
    let aDiv = parseInt(a / 10),
        aMod = a % 10,
        bDiv = parseInt(b / 10),
        bMod = b % 10;
    return aDiv === bDiv || aMod === bMod ||
           aDiv === bMod || aMod === bDiv;
}

console.log(shareDigit(12, 23)); // true
console.log(shareDigit(12, 43)); // false
console.log(shareDigit(12, 44)); // false