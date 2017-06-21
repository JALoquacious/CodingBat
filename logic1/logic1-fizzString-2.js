/*
Given an int n, return the string form of the number followed by "!".
So the int 6 yields "6!". Except if the number is divisible by 3 use
"Fizz" instead of the number, and if the number is divisible by 5 use
"Buzz", and if divisible by both 3 and 5, use "FizzBuzz".

fizzString2(1) → "1!"
fizzString2(2) → "2!"
fizzString2(3) → "Fizz!"
*/

function fizzString2(n) {
    return (n % 3 === 0 && n % 5 === 0)
        ? "FizzBuzz!" : (n % 3 === 0)
        ? "Fizz" : (n % 5 === 0)
        ? "Buzz" : n
        + "!";
}

console.log(fizzString2(1)); // "1!"
console.log(fizzString2(2)); // "2!"
console.log(fizzString2(3)); // "Fizz!"
console.log(fizzString2(30)); // "FizzBuzz!"
console.log(fizzString2(30)); // "FizzBuzz!"