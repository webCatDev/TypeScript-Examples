"use strict";
var concat = function (n1, n2) {
    return typeof n1 === "number" && typeof n2 === "number"
        ? Number(n1 + n2)
        : typeof n1 === "number" && typeof n2 === "number"
            ? String(n1 + n2)
            : undefined;
};
