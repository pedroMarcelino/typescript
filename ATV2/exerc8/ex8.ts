import * as rs from 'readline-sync';
let rest:number = 0;

for (let i = 1; i <= 10; i++) {
    let num = Number(rs.question("digite um numero: "));
    
    rest += num; 
}

console.log(rest);