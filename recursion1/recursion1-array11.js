/*
Given an array of ints, compute recursively the number of times that
the value 11 appears in the array. We'll use the convention of
considering only the part of the array that begins at the given index. In
this way, a recursive call can pass index+1 to move down the array. The
initial call will pass in index as 0.

array11([1, 2, 11], 0) → 1
array11([11, 11], 0) → 2
array11([1, 2, 3, 4], 0) → 0
*/

function array11(array, start) {
	if (array.length < 1 || array.length <= start) {
		return 0;
	} else {
		return (array[start] === 11)
			? array11(array, start + 1) + 1
			: array11(array, start + 1);
	}
}

console.log(array11([1, 2, 11], 0)); // 1
console.log(array11([11, 11], 0)); // 2
console.log(array11([1, 2, 3, 4], 0)); // 0
console.log(array11([101, 11, 32, 96, 5, 40, 73], 3)); // 0
console.log(array11([11, 11, 11, 21, 31, 41, 11, 11], 4)); // 2