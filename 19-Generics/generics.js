"use strict";
var names = []; // string[]
var promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'Hello world!');
});
promise.then(function (str) { return console.log(str); });
