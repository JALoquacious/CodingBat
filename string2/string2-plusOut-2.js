/*
Given a string and a non-empty word string, return a version of the
original String where all chars have been replaced by pluses ("+"),
except for appearances of the word string which are preserved unchanged.

plusOut("12xy34", "xy") → "++xy++"
plusOut("12xy34", "1") → "1+++++"
plusOut("12xy34xyabcxy", "xy") → "++xy++xy+++xy"
*/

/*
Author's note:
I'm beginning to see the power of functional programming. Compare this
imperative version with its declarative counterpart. Now that I've cleaned
up this code, it doesn't look that complicated, but it's a trickier
question than it seems at first glance. It took a while and a lot of
console log statements to get it to pass all tests.
*/

function plusOut(str, sub) {
    let idx = 0,
        tmp = 0,
        res = [],
        arr = str.split('');
        
    for (idx = 0; idx < arr.length; idx++) {
        tmp = arr.slice(idx, idx + sub.length);
        if (tmp.join('') === sub) {
            idx += sub.length - 1;
        } else {
            tmp = ['+'];
        }
        res = res.concat(tmp);
    }
    return res.join('');
}

console.log(plusOut("12xyz34", "xyz")); // "++xyz++"
console.log(plusOut("12xy34", "1")); // "1+++++"
console.log(plusOut("12xy34xyabcxy", "xy")); // "++xy++xy+++xy"