/*
We'll say that a positive int n is "endy" if it is in the range 0..10
or 90..100 (inclusive). Given an array of positive ints, return a new
array of length "count" containing the first endy numbers from the
original array. Decompose out a separate isEndy(int n) method to test
if a number is endy. The original array will contain at least "count"
endy numbers.

copyEndy([9, 11, 90, 22, 6], 2) → [9, 90]
copyEndy([9, 11, 90, 22, 6], 3) → [9, 90, 6]
copyEndy([12, 1, 1, 13, 0, 20], 2) → [1, 1]
*/

function copyEndy(array, n) {
    // generate & concatenate relevant ranges, then find number
    function isEndy(n) {
        let rng0_10   = [...Array(10 + 1).keys()].map(i => i),
            rng90_100 = rng0_10.map(i => i + 90),
            range     = rng0_10.concat(rng90_100);
        
        return range.includes(n);
    }
    return array.filter(isEndy).slice(0, n);
}

console.log(copyEndy([9, 11, 90, 22, 6], 2)); // [9, 90]
console.log(copyEndy([9, 11, 90, 22, 6], 3)); // [9, 90, 6]
console.log(copyEndy([12, 1, 1, 13, 0, 20], 2)); // [1, 1]