/*
Returns true if for every '*' (star) in the string, if there are chars
both immediately before and after the star, they are the same.

sameStarChar("xy*yzz") → true
sameStarChar("xy*zzz") → false
sameStarChar("*xa*az") → true
*/

function sameStarChar(str) {
    let matches = str.match(/.\*./gi) || [];
    return !!matches.filter(function(elem) {
        return elem[0] === elem[2];
    }).length;
}

console.log(sameStarChar("xy*yzz")); // true
console.log(sameStarChar("xy*zzz")); // false
console.log(sameStarChar("*xa*az")); // true
console.log(sameStarChar("*")); // false