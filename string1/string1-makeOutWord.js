/*
Given an "out" string length 4, such as "<<>>", and a word, return a
new string where the word is in the middle of the out string, e.g."
<<word>>".

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<>", "WooHoo") → "<WooHoo>"
makeOutWord("[[[]]]", "word") → "[[[word]]]"
*/

function makeOutWord(box, txt) {
    return (box.slice(0, box.length / 2) + txt +
            box.slice(box.length / 2, box.length));
}

console.log(makeOutWord("<<>>", "Yay")); // "<<Yay>>"
console.log(makeOutWord("<>", "WooHoo")); // "<WooHoo>"
console.log(makeOutWord("[[[]]]", "word")); // "[[[word]]]"