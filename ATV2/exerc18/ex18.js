"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var m = 0;
var array = new Array;
for (var i = 0; i < 5; i++) {
    var userNum = Number(rs.question("Digite um n\u00FAmero "));
    array.push(userNum);
    if (userNum > m) {
        m = userNum;
    }
}
console.log(array);
console.log("maio: " + m);
