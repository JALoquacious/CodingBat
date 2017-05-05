/*
Given a string name, e.g. "Bob", return a greeting of the form "Hello
Bob!".

helloName("Bob") → "Hello, Bob!"
helloName("Alice") → "Hello, Alice!"
helloName("X") → "Hello, X!"
*/

function helloName(name) {
    return `Hello, ${name}!`;
}

console.log(helloName("Bob")); // "Hello Bob!"
console.log(helloName("Alice")); // "Hello Alice!"
console.log(helloName("X")); // "Hello X!"