/*
Given two strings, return true if either of the strings appears at the
very end of the other string, ignoring upper/lower case differences (in
other words, the computation should not be "case sensitive"). Note:
str.toLowerCase() returns the lowercase version of a string.

endOther("Hiabc", "abc") → true
endOther("AbC", "HiaBc") → true
endOther("abc", "abXabc") → true
*/

function endOther(str1, str2) {
    let strOne = str1.toLowerCase(),
        strTwo = str2.toLowerCase();
    return strOne.slice(-strTwo.length) === strTwo
        || strTwo.slice(-strOne.length) === strOne;
}

console.log(endOther("abchi", "HI")); // true
console.log(endOther("AbC", "HiaBc")); // true
console.log(endOther("abc", "abXabc")); // true
console.log(endOther("abc", "abXxyz")); // false