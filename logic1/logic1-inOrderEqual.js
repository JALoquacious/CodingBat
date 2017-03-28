/*
Given three ints, a b c, return true if they are in strict increasing
order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with
the exception that if "equalOk" is true, equality is allowed, such as
5 5 7 or 5 5 5.

inOrderEqual(2, 5, 11, false) → true
inOrderEqual(5, 7, 6, false) → false
inOrderEqual(5, 5, 7, true) → true
*/

function inOrderEqual(a, b, c, equalOk) {
    return (equalOk)
        ? (a <= b) && (b <= c)
        : (a < b) && (b < c);
}

console.log(inOrderEqual(1, 2, 4, false)); // true
console.log(inOrderEqual(1, 2, 1, false)); // false
console.log(inOrderEqual(1, 1, 2, true)); // true