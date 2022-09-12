"use strict";
function addThings(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var result = addThings(2, 3);
var result2 = addThings('2', '3');
