/*
Given a string str, if the string starts with "f" return "Fizz". If the
string ends with "b" return "Buzz". If both the "f" and "b" conditions
are true, return "FizzBuzz". In all other cases, return the string
unchanged. (See also: FizzBuzz Code)

fizzString("fig") → "Fizz"
fizzString("dib") → "Buzz"
fizzString("fib") → "FizzBuzz"
*/

function fizzString(str) {
    return (str[0] === "f" && str[str.length - 1] === "b")
        ? "FizzBuzz" : (str[0] === "f")
        ? "Fizz" : (str[str.length - 1] === "b")
        ? "Buzz" : str;
}

console.log(fizzString("fig")); // "Fizz"
console.log(fizzString("dib")); // "Buzz"
console.log(fizzString("fib")); // "FizzBuzz"
console.log(fizzString("did")); // "did"