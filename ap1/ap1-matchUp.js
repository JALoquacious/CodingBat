/*
Given 2 arrays that are the same length containing strings, compare the
1st string in one array to the 1st string in the other array, the 2nd
to the 2nd and so on. Count the number of times that the 2 strings are
non-empty and start with the same char. The strings may be any length,
including 0.

matchUp(["aa", "bb", "cc"], ["aaa", "xx", "bb"]) → 1
matchUp(["aa", "bb", "cc"], ["aaa", "b", "bb"]) → 2
matchUp(["aa", "bb", "cc"], ["", "", "ccc"]) → 1
*/

function matchUp(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i][0] === arr2[i][0]) {
            count++;
        }
    }
    return count;
}

console.log(matchUp(["aa", "bb", "cc"], ["aaa", "xx", "bb"])); // 1
console.log(matchUp(["aa", "bb", "cc"], ["aaa", "b", "bb"])); // 2
console.log(matchUp(["aa", "bb", "cc"], ["", "", "ccc"])); // 1