/*
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
(1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll
say have 3 ears, because they each have a raised foot. Recursively
return the number of "ears" in the bunny line 1, 2, ... n (without
loops or multiplication).

bunnyEars2(0) → 0
bunnyEars2(1) → 2
bunnyEars2(2) → 5
*/

function bunnyEars2(n) {
	if (n === 0) {
        return 0;
    } else {
		return (n % 2)
            ? 2 + bunnyEars2(n - 1)
            : 3 + bunnyEars2(n - 1);
	}
}

console.log(bunnyEars2(0)); // 0
console.log(bunnyEars2(1)); // 2
console.log(bunnyEars2(2)); // 5
console.log(bunnyEars2(10)); // 25