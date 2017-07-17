/*
Given a string, compute recursively (no loops) a new string where all
appearances of "pi" have been replaced by "3.14".

changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p"
*/

function changePi(str) {
    if (str.length === 0) {
        return str;
    } else {
        return (str.substr(0, 2) === 'pi')
            ? '3.14' + changePi(str.substr(2))
            : str.charAt(0) + changePi(str.substr(1));
    }
}

console.log(changePi("xpix"));
console.log(changePi("pipi"));
console.log(changePi("pip"));
console.log(changePi("what's the number? pi!"));
console.log(changePi("fat tony's pie"));