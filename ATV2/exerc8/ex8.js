"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var rest = 0;
for (var i = 1; i <= 10; i++) {
    var num = Number(rs.question("digite um numero: "));
    rest += num;
}
console.log(rest);
