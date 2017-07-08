/*
Return true if the given string contains an appearance of "xyz" where
the xyz is not directly preceeded by a period (.). So "xxyz" counts but
"x.xyz" does not.

xyzThere("abcxyz") → true
xyzThere("abc.xyz") → false
xyzThere("xyz.abc") → true
*/

function xyzThere(str) {
    // JS has no support for negative lookbehind, otherwise:
    // return /(?<!\.)xyz/.test(str);
    let match = str.match(/.?xyz/g);
    return match ? match[0][0] !== '.' : false;
}

console.log(xyzThere("abcxyz")); // true
console.log(xyzThere("abc.xyz")); // false
console.log(xyzThere("xyz.abc")); // true
console.log(xyzThere("abcdefg")); // false