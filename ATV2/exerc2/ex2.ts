import * as rs from 'readline-sync';

console.log('Em que ano a Apple foi criada ?');
console.log('\n');

console.log('A - 1976');
console.log('B - 2021');
console.log('C - 1500 a.C');
console.log('D - 1800 ?');
console.log('E - 1985');
console.log('\n');

let resp = rs.question('Digite a letra correspondente a resposta: ');

resp = resp.toUpperCase();

if (resp == "A") {
    console.log("AII SIM HEIN");
} else {
    console.log("SERIO ??????? TENTA DNV AI");
}
