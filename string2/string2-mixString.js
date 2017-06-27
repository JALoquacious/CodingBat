/*
Given two strings, a and b, create a bigger string made of the first
char of a, the first char of b, the second char of a, the second char
of b, and so on. Any leftover chars go at the end of the result.

mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"
*/

/*
Author's note: As usual, I went the long way around and tried to add a
little (functional) spice to the code.
*/

function mixString(str1, str2) {
    let obj  = { str1 : str1.length, str2 : str2.length },
        min  = Math.min(...Object.values(obj)),
        max  = Math.max(...Object.values(obj)),
        rest = str1.slice(min, max) || str2.slice(min, max);
    return Array(min)
        .fill('')
        .map((elem, idx) => str1[idx] + str2[idx])
        .concat(rest)
        .join('');
}

console.log(mixString("abc", "xyz")); // "axbycz"
console.log(mixString("Hi", "There")); // "HTihere"
console.log(mixString("xxxx", "There")); // "xTxhxexre"