import * as rs from 'readline-sync';
let m: number = 0;
let array: Array<number> = new Array;

for (let i: number = 0; i < 5; i++) {
    let userNum = Number(rs.question(`Digite um número `));
    array.push(userNum);

    if (userNum > m) {
        m = userNum;
    }
}

console.log(array);
console.log("maio: " + m);