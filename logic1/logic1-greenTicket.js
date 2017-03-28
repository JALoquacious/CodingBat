/*
You have a green lottery ticket, with ints a, b, and c on it. If the
numbers are all different from each other, the result is 0. If all of
the numbers are the same, the result is 20. If two of the numbers are
the same, the result is 10.

greenTicket(1, 2, 3) → 0
greenTicket(2, 2, 2) → 20
greenTicket(1, 1, 2) → 10
*/

/*
Author's note:

Like redTicket, I decided to mess around on this puzzle. This solution
isn't any more scalable than my original conditional logic, but it was
fun to work through alternatives, and it seems to work for a number of
tests that I put it through.
*/

function greenTicket(a, b, c) {
    return Array(...arguments).map(function(elem, idx, arr) {
        return (arr[idx] === arr[idx + 1]) ? 10 : 0;
    }).reduce(function(a, b) {
        return a + b;
    });
}

console.log(greenTicket(1, 2, 3)); // 0
console.log(greenTicket(2, 2, 2)); // 20
console.log(greenTicket(1, 1, 2)); // 10