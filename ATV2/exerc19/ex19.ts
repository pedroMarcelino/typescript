import * as rs from 'readline-sync';
let num: Array<number> = new Array;
let inv: Array<number> = new Array;
let Length: number = 0;

for (let i: number = 0; i < 3; i++) {
    let n1 = Number(rs.question(`Digite um número `));
    num.push(n1);
}

Length = num.length;
Length--;

for (let x: number = Length; x >= 0; x--) {
    inv.push(num[x]);
}

console.log(num);
console.log(inv);
