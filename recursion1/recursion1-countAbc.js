/*
Count recursively the total number of "abc" and "aba" substrings that
appear in the given string.

countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/

function countAbc(str) {
    if (str.length === 0) {
        return 0;
    } else {
        let sub = str.substr(0, 3);
        return (sub === "abc" || sub === "aba")
            ? 1 + countAbc(str.substr(sub.length))
            : countAbc(str.substr(1));
    }
}

console.log(countAbc("abc")); // 1
console.log(countAbc("abcxxabc")); // 2
console.log(countAbc("abaxxaba")); // 2
console.log(countAbc("abcabacbacbacbabacabaccab")); // 4
console.log(countAbc("1abc2aba3abc4aba5ccc6bab7cac8bcb9abc")); // 5