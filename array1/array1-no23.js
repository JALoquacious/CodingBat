/*
Given an int array length 2, return true if it does not contain a 2 or
3.

no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false
*/

function no23(array) {
    return array.indexOf(2) < 0 && array.indexOf(3) < 0;
}

console.log(no23([4, 5])); // true
console.log(no23([4, 2])); // false
console.log(no23([3, 5])); // false