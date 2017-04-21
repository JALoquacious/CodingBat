/*
Given an array of ints length 3, return an array with the elements
"rotated left" so {1, 2, 3} yields {2, 3, 1}.

rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7]
*/

function rotateLeft3(array) {
    return [array[1], array[2], array[0]];
}

console.log(rotateLeft3([1, 2, 3])); // [2, 3, 1]
console.log(rotateLeft3([5, 11, 9])); // [11, 9, 5]
console.log(rotateLeft3([7, 0, 0])); // [0, 0, 7]