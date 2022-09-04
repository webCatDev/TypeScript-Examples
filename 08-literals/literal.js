"use strict";
var sumNumbers = function (n1, n2, resultType) { return (resultType === "as-number" ? n1 + n2 : String(n1 + n2)); };
sumNumbers(2, 3, 'as-text');
