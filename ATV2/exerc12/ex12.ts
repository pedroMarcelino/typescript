
import * as rs from 'readline-sync';

seeUser();

function qUser() {
    return rs.question(`Digite o nome `);
}

function seeUser() {
    console.log(qUser());
}