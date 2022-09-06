"use strict";
function divide(n1, n2) {
    return n1 / n2;
}
var divideNumbers;
divideNumbers = divide;
console.log(divideNumbers(4, 2));
var printSum = function (n, n2, cb) { return cb(n + n2); };
printSum(2, 3, function (res) { return console.log(res); });
