/*
We have data for two users, A and B, each with a string name and an int
id. The goal is to order the users such as for sorting. Return -1 if A
comes before B, 1 if A comes after B, and 0 if they are the same. Order
first by the string names, and then by the id numbers if the names are
the same. Note: with Strings str1.compareTo(str2) returns an int value
which is negative/0/positive to indicate how str1 is ordered to str2
(the value is not limited to -1/0/1).

userCompare("bb", 1, "zz", 2) → -1
userCompare("bb", 1, "aa", 2) → 1
userCompare("bb", 1, "bb", 1) → 0
*/

function userCompare(name1, id1, name2, id2) {
    if (name1 < name2 || name1 === name2 && id1 < id2) {
        return -1;
    }
    if (name1 > name2 || name1 === name2 && id1 > id2) {
        return 1;
    }
    return 0;
}

console.log(userCompare("bb", 1, "zz", 2)); // -1
console.log(userCompare("bb", 1, "aa", 2)); // 1
console.log(userCompare("bb", 1, "bb", 1)); // 0