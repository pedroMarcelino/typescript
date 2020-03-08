"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n1 = Number(rs.question("Digite um numero: "));
for (var i = 1; i <= 10; i++) {
    var rest = 0;
    rest = n1 * i;
    console.log(rest);
}
