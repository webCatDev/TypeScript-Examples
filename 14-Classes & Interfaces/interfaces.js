"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
var user = new Person('David', 24);
user.greet('Hello');
// interface AddFn2 { (number1: number, number2: number): number } // we can use interface to define function
var add;
add = function (n1, n2) {
    return n1 + n2;
};
