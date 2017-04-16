/*
Given 2 int arrays, a and b, return a new array length 2 containing, as
much as will fit, the elements from a followed by the elements from b.
The arrays may be any length, including 0, but there will be 2 or more
elements available between the 2 arrays.

make2([4, 5], [1, 2, 3]) → [4, 5]
make2([4], [1, 2, 3]) → [4, 1]
make2([], [1, 2]) → [1, 2]
*/

function make2(arr1, arr2) {
    return arr1.concat(arr2).slice(0,2);
}

console.log(make2([4, 5], [1, 2, 3])); // [4, 5]
console.log(make2([4], [1, 2, 3])); // [4, 1]
console.log(make2([], [1, 2])); // [1, 2]