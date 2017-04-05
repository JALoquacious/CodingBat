/*
Given three ints, a b c, return true if it is possible to add two of
the ints to get the third.

twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false
*/

function twoAsOne(a, b, c) {
    return (a + b === c) || ( a + c === b) || ( b + c === a);
}

console.log(twoAsOne(1, 2, 3)); // true
console.log(twoAsOne(3, 1, 2)); // true
console.log(twoAsOne(3, 2, 2)); // false