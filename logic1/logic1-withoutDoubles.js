/*
Return the sum of two 6-sided dice rolls, each in the range 1..6.
However, if noDoubles is true, if the two dice show the same value,
increment one die to the next value, wrapping around to 1 if its value
was 6.

withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6
*/

function withoutDoubles(a, b, noDoubles) {
    if (noDoubles && a === b) {
        return (a + 1 === 6) ? ++a % 5 + b : ++a + b;
    }
    return a + b;
}

console.log(withoutDoubles(2, 3, true)); // 5
console.log(withoutDoubles(3, 3, true)); // 7
console.log(withoutDoubles(3, 3, false)); // 6
console.log(withoutDoubles(5, 5, true)); // 6