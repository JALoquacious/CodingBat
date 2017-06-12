/*
Given an array of scores, compute the int average of the first half and
the second half, and return whichever is larger. We'll say that the
second half begins at index length/2. The array length will be at least
2. To practice decomposition, write a separate helper method which
computes the average of the elements between indexes start..end. Call
your helper method twice to implement scoresAverage(). Write your helper
method after your scoresAverage() method. Normally you would compute averages with doubles, but here we use ints so the expected results are exact.

scoresAverage([2, 2, 4, 4]) → 4
scoresAverage([4, 4, 4, 2, 2, 2]) → 4
scoresAverage([3, 4, 5, 1, 2, 3]) → 4
*/

function scoresAverage(array) {
    let len = array.length,
        half1 = array.slice(0, len / 2),
        half2 = array.slice(len / 2, len),
        avg = (arr) => parseInt(arr.reduce((a,b) => a + b) / arr.length);
    return Math.max(avg(half1), avg(half2));
}

console.log(scoresAverage([2, 2, 4, 4])); // 4
console.log(scoresAverage([4, 4, 4, 2, 2, 2])); // 4
console.log(scoresAverage([3, 4, 5, 1, 2, 3])); // 4
console.log(scoresAverage([4, 8, 12, 5, 10, 10])); // 8