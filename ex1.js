"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n = rs.question('Digite um numero: ');
if (n % 2 == 0) {
    console.log('O numero ${n} é um numero par');
}
else {
    console.log('O numero ${n} é um numero impar');
}
