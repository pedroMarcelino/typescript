import * as rs from 'readline-sync';

let opt = rs.question(`Digite a operação (* + / -) `);
let n1 = Number(rs.question(`Digite o primeiro número `));
let n2 = Number(rs.question(`Digite o segundo número `));

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


function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
}

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

function dividir(n1: number, n2: number): number {
    return n1 / n2;
}

function subtrair(n1: number, n2: number): number {
    return n1 - n2;
}