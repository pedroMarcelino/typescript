"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var opt = rs.question("Digite a opera\u00E7\u00E3o (* + / -) ");
var n1 = Number(rs.question("Digite o primeiro n\u00FAmero "));
var n2 = Number(rs.question("Digite o segundo n\u00FAmero "));
switch (opt) {
    case '*':
        console.log(multiplicar(n1, n2));
        break;
    case '+':
        console.log(somar(n1, n2));
        break;
    case '/':
        console.log(dividir(n1, n2));
        break;
    case '-':
        console.log(subtrair(n1, n2));
        break;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}
function somar(n1, n2) {
    return n1 + n2;
}
function dividir(n1, n2) {
    return n1 / n2;
}
function subtrair(n1, n2) {
    return n1 - n2;
}
