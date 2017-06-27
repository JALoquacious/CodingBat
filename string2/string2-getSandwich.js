/*
A sandwich is two pieces of bread with something in between. Return the
string that is between the first and last appearance of "bread" in the
given string, or return the empty string "" if there are not two pieces
of bread.

getSandwich("breadjambread") → "jam"
getSandwich("xxbreadjambreadyy") → "jam"
getSandwich("xxbreadyy") → ""
*/

function getSandwich(str) {
    let reg = /bread([a-z]+)bread/gi.exec(str);
    return reg ? reg[1] : '';
}

console.log(getSandwich("breadjambread")); // "jam"
console.log(getSandwich("xxbreadjambreadyy")); // "jam"
console.log(getSandwich("xxbreadyy")); // ""