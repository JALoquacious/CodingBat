/*
Given a string, compute recursively (no loops) the number of "11"
substrings in the string. The "11" substrings should not overlap.

count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1
*/

function count11(str) {
	if (str.length === 0) {
		return 0;
	} else {
		return (str.substr(0, 2) === "11")
			? 1 + count11(str.substr(2))
			: count11(str.substr(1));
	}
}

console.log(count11("11abc11")); // 2
console.log(count11("abc11x11x11")); // 3
console.log(count11("111")); // 1
console.log(count11("111111111")); // 4
console.log(count11("101")); // 0