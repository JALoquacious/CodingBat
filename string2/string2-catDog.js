/*
Return true if the string "cat" and "dog" appear the same number of
times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true
*/

function catDog(str) {
    let map = str.match(/cat|dog/g).reduce(function(acc, cur) {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    return map.cat === map.dog;
}

console.log(catDog("catdog")); // true
console.log(catDog("catcat")); // false
console.log(catDog("1cat1cadodog")); // true