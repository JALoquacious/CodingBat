/*
Return true if the given string contains a "bob" string, but where the
middle 'o' char can be any char.

bobThere("abcbob") → true
bobThere("b9b") → true
bobThere("bac") → false
*/

function bobThere(str) {
    return /b\wb/g.test(str);
}

console.log(bobThere("abcbob")); // true
console.log(bobThere("b9b")); // true
console.log(bobThere("bac")); // false
console.log(bobThere("abcdefg")); // false