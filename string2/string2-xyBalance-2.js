/*
We'll say that a String is xy-balanced if for all the 'x' chars in the
string, there exists a 'y' char somewhere in the string. Return
true if the given string is xy-balanced.

xyBalance2("aaxbby") → true
xyBalance2("aaxbb") → false
xyBalance2("yaaxbb") → false

Author's note: This is a slightly different exercise than the original
xyBalance problem. I changed the prompt so that a 'y' anywhere in the
string would balance an 'x' anywhere in the string; order doesn't matter.
*/

function xyBalance2(str) {
    return !( // if x|y values cancel to zero, output true
        str.split('').reduce(function(acc, cur) {
            acc += ({ x:1, y:-1 }[cur] || 0);
            return acc;
        }, 0)
    );
}

console.log(xyBalance2("aaxbby")); // true
console.log(xyBalance2("aaxbbyyy")); // false
console.log(xyBalance2("yaaxbb")); // true
console.log(xyBalance2("xyxyzzyx")); // true