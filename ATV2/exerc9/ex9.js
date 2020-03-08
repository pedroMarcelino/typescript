"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var alt = 0;
var altM = 0;
var name = "";
var nameM = "";
for (var i = 1; i <= 5; i++) {
    name = rs.question('Digite seu nome: ');
    alt = Number(rs.question('Digite sua altura: '));
    if (alt > altM) {
        altM = alt;
        nameM = name;
    }
}
console.log('o nome da pessoa mais alta e: ' + altM + ', e a o nome: ' + nameM);
