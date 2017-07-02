/*
Given two strings, word and a separator sep, return a big string made
of count occurrences of the word, separated by the separator string.

repeatSeparator("Word", "X", 3) → "WordXWordXWord"
repeatSeparator("This", "And", 2) → "ThisAndThis"
repeatSeparator("This", "And", 1) → "This"
*/

function repeatSeparator(str, sep, num) {
    return Array(num).fill(str).join(sep);
}

console.log(repeatSeparator("Word", "X", 3)); // "WordXWordXWord"
console.log(repeatSeparator("This", "And", 2)); // "ThisAndThis"
console.log(repeatSeparator("This", "And", 1)); // "This"