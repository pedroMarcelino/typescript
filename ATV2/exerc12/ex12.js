"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
seeUser();
function qUser() {
    return rs.question("Digite o nome ");
}
function seeUser() {
    console.log(qUser());
}
