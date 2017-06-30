/*
Given a string and an int n, return a string made of the first n
characters of the string, followed by the first n-1 characters of the
string, and so on. You may assume that n is between 0 and the length of
the string, inclusive (i.e. n >= 0 and n <= str.length()).

repeatFront("Chocolate", 4) → "ChocChoChC"
repeatFront("Chocolate", 3) → "ChoChC"
repeatFront("Ice Cream", 2) → "IcI"
*/

function repeatFront(str, num) {
    return str
        .slice(0, num)
        .split('')
        .map((elem, idx, arr) => arr.slice(0, idx + 1).join(''))
        .reverse()
        .join('');
}

console.log(repeatFront("Chocolate", 4)); // "ChocChoChC"
console.log(repeatFront("Chocolate", 3)); // "ChoChC"
console.log(repeatFront("Ice Cream", 2)); // "IcI"