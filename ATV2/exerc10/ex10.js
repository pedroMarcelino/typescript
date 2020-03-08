"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var txt;
do {
    txt = rs.question("Digite uma palavra que tenha F ou comece com P ");
    txt = txt.toLowerCase();
} while (txt.indexOf('f') == -1 && txt.indexOf('p') != 0);
