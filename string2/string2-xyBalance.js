/*
We'll say that a String is xy-balanced if for all the 'x' chars in the
string, there exists a 'y' char somewhere later in the string. So "xxy"
is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return
true if the given string is xy-balanced.

xyBalance("aaxbby") → true
xyBalance("aaxbb") → false
xyBalance("yaaxbb") → false
*/

function xyBalance(str) {
    return !str.split('').reduce(function(acc, cur) {
        if (cur === 'x') {
            acc += 1;
        } else if (cur === 'y') {
            acc *= 0;
        }
        return acc;
    }, 0);
}

console.log(xyBalance("aaxbby")); // true
console.log(xyBalance("aaxbb")); // false
console.log(xyBalance("yaaxbb")); // false
console.log(xyBalance("axxxxxxxyb")); // true