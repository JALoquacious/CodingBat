/*
Given a string, does "xyz" appear in the middle of the string? To
define middle, we'll say that the number of chars to the left and right
of the "xyz" must differ by at most one. This problem is harder than it
looks.

xyzMiddle("AAxyzBB") → true
xyzMiddle("AxyzBB") → true
xyzMiddle("AxyzBBB") → false
*/

function xyzMiddle(str) {
    let mid = Math.floor(str.length / 2);
    return (str.length % 2) 
        ? str.slice(mid - 1, mid + 2) === 'xyz'
        : str.slice(mid - 2, mid + 1) === 'xyz';
}

console.log(xyzMiddle("AAxyzBB")); // true
console.log(xyzMiddle("AxyzBB")); // true
console.log(xyzMiddle("AxyzBBB")); // false