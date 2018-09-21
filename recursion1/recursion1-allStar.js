/*
Given a string, compute recursively a new string where all the adjacent
chars are now separated by a "*".

allStar("hello") → "h*e*l*l*o"
allStar("abc") → "a*b*c"
allStar("ab") → "a*b"
*/

function allStar(str) {
    return (str.length < 2)
        ? str
        : str.charAt(0) + "*" + allStar(str.substr(1));
}

console.log(allStar("hello")); // "h*e*l*l*o"
console.log(allStar("abc")); // "a*b*c"
console.log(allStar("testing123")); // "t*e*s*t*i*n*g*1*2*3"
console.log(allStar("***")); // "*****"
console.log(allStar("rocknroll")); // "r*o*c*k*n*r*o*l*l"