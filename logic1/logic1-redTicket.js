/*
You have a red lottery ticket showing ints a, b, and c, each of which
is 0, 1, or 2. If they are all the value 2, the result is 10.
Otherwise if they are all the same, the result is 5. Otherwise so long
as both b and c are different from a, the result is 1. Otherwise the
result is 0.

redTicket(2, 2, 2) → 10
redTicket(2, 2, 1) → 0
redTicket(0, 0, 0) → 5
*/

/*
Author's note:

I decided to have a little fun with this one. Note that the methodology
used here makes the solution much more scalable than hardcoded
conditional statements, since unlimited patterns can be tested. One
could even name the tests and combine them into named arrow functions
to reduce duplication. For example: abEq=()=>(a===b), bcEq=()=>(b===c),
a2=()=>(a===2) would allow wins[0].test to return the much more modular
(abEq && bcEq && a2).
*/

function redTicket(a, b, c) {
    const wins = [
        { test: () => (a === b && b === c) && (a === 2), score: 10 },
        { test: () => (a === b && b === c), score: 5 },
        { test: () => (a !== b && a !== c), score: 1 }
    ];
    
    for (let i = 0; i < wins.length; i++) {
        if (wins[i].test()) return wins[i].score;
    }
    return 0;
}

console.log(redTicket(2, 2, 2)); // 10
console.log(redTicket(2, 2, 1)); // 0
console.log(redTicket(0, 0, 0)); // 5
console.log(redTicket(0, 1, 1)); // 1