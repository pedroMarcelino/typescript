import * as rs from 'readline-sync';

let nota1 = Number(rs.question('Digite a 1º nota: '));
let nota2 = Number(rs.question('Digite a 2º nota: '));
let nota3 = Number(rs.question('Digite a 3º nota: '));

let rest = (nota1 + nota2 + nota3) / 3;

if (rest <= 8 && rest <= 10) {
    console.log("NOTA A");
} else if (rest <= 7 && rest < 8) {
    console.log("NOTA B");
} else if (rest <= 5 && rest < 7) {
    console.log("NOTA C");
} else if (rest <= 4 && rest < 5) {
    console.log("NOTA D")
} else if (rest <= 0 && rest < 4) {
    console.log("NOTA E")
}
