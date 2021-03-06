/*
We have a number of bunnies and each bunny has two big floppy ears. We
want to compute the total number of ears across all the bunnies
recursively (without loops or multiplication).

bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4
*/

function bunnyEars(n) {
    return (n === 0) ? 0 : 2 + bunnyEars(n - 1);
}

console.log(bunnyEars(0)); // 0
console.log(bunnyEars(1)); // 2
console.log(bunnyEars(2)); // 4
console.log(bunnyEars(15)); // 30