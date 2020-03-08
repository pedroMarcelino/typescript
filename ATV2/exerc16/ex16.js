"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var cont = true;
var nameArr = new Array;
do {
    var name_1 = rs.question("Digite o nome ");
    name_1 = name_1.toLowerCase();
    if (name_1 == 'sair') {
        cont = false;
    }
    else {
        nameArr.push(name_1);
    }
} while (cont);
console.log(nameArr);
