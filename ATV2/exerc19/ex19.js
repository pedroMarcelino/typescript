"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num = new Array;
var inv = new Array;
var Length = 0;
for (var i = 0; i < 3; i++) {
    var n1 = Number(rs.question("Digite um n\u00FAmero "));
    num.push(n1);
}
Length = num.length;
Length--;
for (var x = Length; x >= 0; x--) {
    inv.push(num[x]);
}
console.log(num);
console.log(inv);
