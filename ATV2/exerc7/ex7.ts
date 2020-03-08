import * as rs from 'readline-sync';

let n1 = Number(rs.question("Digite um numero: "));

for (let i = 1; i <= 10; i++){
    let rest:number = 0;

    rest = n1 * i;

    console.log(rest);
}