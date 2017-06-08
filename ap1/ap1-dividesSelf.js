/*
We'll say that a positive int divides itself if every digit in the
number divides into the number evenly. So for example 128 divides itself
since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not
divide into anything evenly, so no number with a 0 digit divides itself.

dividesSelf(128) → true
dividesSelf(12) → true
dividesSelf(120) → false
*/

function dividesSelf(n) {
    let origN = n;
    while (n > 0) {
        let digit = n % 10;
        if (origN % digit !== 0) {
            return false;
        }
        n = parseInt(n / 10);
    }
    return true;
}

console.log(dividesSelf(128)); // true
console.log(dividesSelf(12)); // true
console.log(dividesSelf(120)); // false
console.log(dividesSelf(124888)); // true