/*
Given 2 ints, a and b, return their sum. However, sums in the range
10..19 inclusive, are forbidden, so in that case just return 20.

sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21
*/

function sortaSum(a, b) {
    return (10 <= a + b && a + b <= 19) ? 20 : a + b;
}

console.log(sortaSum(3, 4)); // 7
console.log(sortaSum(9, 4)); // 20
console.log(sortaSum(10, 11)); // 21