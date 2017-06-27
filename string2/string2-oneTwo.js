/*
Given a string, compute a new string by moving the first char to come
after the next two chars, so "abc" yields "bca". Repeat this process
for each subsequent group of 3 chars, so "abcdef" yields "bcaefd".
Ignore any group of fewer than 3 chars at the end.

oneTwo("abc") → "bca"
oneTwo("tca") → "cat"
oneTwo("tcagdo") → "catdog"
*/

function oneTwo(str) {
    let match = str.match(/.{1,3}/g) || [];
    return match.map(function(elem) {
        return elem.substring(1) + elem.substring(0,1);
    }).join('');
}

console.log(oneTwo("abc")); // "bca"
console.log(oneTwo("tca")); // "cat"
console.log(oneTwo("tcagdot")); // "catdog"
console.log(oneTwo("tcagdot")); // "catdog"