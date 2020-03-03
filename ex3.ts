import * as rs from 'readline-sync';

let ano = Number(rs.question('Digite um ano e saiba se e bissexto '));

if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
    console.log('O ano de ' + ano + ' é bissexto');
} else {
    console.log('O ano de ' + ano + ' não é bissexto');
}