"use strict";
// constants don't change so they infer their value as type
var myName = "hamza";
var age = 26;
var isAMan = true;
console.log(myName, age, isAMan);
// we don't know what type n1 and n2 are so we are giving them a number type
function sum(n1, n2) {
    return n1 + n2;
}
sum(3, 4);
function isEqualString(s1, s2) {
    return s1 === s2;
}
isEqualString("hello", "world!");
var isDark = true;
var multiply = function (n1, n2) {
    // typescript only checks type at compile time
    // to ensure we are getting number
    // we need to check types at runtime
    //   if (typeof n1 !== "number" && typeof n2 !== "number") {
    //     throw new Error("Function multiply arguments are expected to be number");
    //   }
    return n1 * n2;
};
