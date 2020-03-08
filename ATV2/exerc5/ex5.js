"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n1 = Number(rs.question("Digite um numero: "));
var n2 = Number(rs.question("Digite um numero: "));
var n3 = Number(rs.question("Digite um numero: "));
var rest = 0;
if (n1 == n2) {
    rest++;
}
if (n1 == n3) {
    rest++;
}
if (n2 == n1) {
    rest++;
}
if (n2 == n3) {
    rest++;
}
if (n3 == n2) {
    rest++;
}
if (n3 == n1) {
    rest++;
}
if (rest == 2) {
    console.log('isósceles');
}
else if (rest == 3) {
    console.log('equilatero');
}
else {
    console.log('escaleno');
}
console.log(rest);
