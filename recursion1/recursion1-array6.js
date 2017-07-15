/*
Given an array of ints, compute recursively if the array contains a 6.
We'll use the convention of considering only the part of the array
that begins at the given index. In this way, a recursive call can
pass index+1 to move down the array. The initial call will pass in
index as 0.

array6([1, 6, 4], 0) → true
array6([1, 4], 0) → false
array6([6], 0) → true
*/

function array6(array, idx) {
	if (idx >= array.length) {
		return false;
	} else {
		return (array[idx] === 6) ? true : array6(array, idx + 1);
	}
}

console.log(array6([1, 6, 4], 0)); // true
console.log(array6([1, 4], 0)); // false
console.log(array6([6], 0)); // true
console.log(array6([1, 2, 3, 4, 5, 6], 3)); // true
console.log(array6([1, 6, 3, 6, 5, 4, 3, 2, 1], 5)); // false