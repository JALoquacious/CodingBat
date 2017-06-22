/*
Return the number of times that the string "hi" appears anywhere in the given string.

countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2
*/

function countHi(str) {
    return (str.match(/hi/ig) || []).length;
}

console.log(countHi("abc hi ho")); // 1
console.log(countHi("ABChi hi")); // 2
console.log(countHi("hihi")); // 2
console.log(countHi("ho ho ho")); // 0