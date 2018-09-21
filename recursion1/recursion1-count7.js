/*
Given a non-negative int n, return the count of the occurrences of 7 as
a digit, so for example 717 yields 2. (no loops). Note that mod (%) by
10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10
removes the rightmost digit (126 / 10 is 12).
*/

function count7(n) {
    if (n < 1) { return 0; }
    return (n % 10 === 7)
        ? 1 + count7(parseInt(n / 10, 10))
        :     count7(parseInt(n / 10, 10));
}

console.log(count7(5)); // 0
console.log(count7(717)); // 2
console.log(count7(718768578457)); // 4
console.log(count7(777777777777777)); // 15