import * as rs from 'readline-sync';
let alt:number = 0;
let altM:number = 0;
let name:string = "";
let nameM:string = "";


for (let i = 1; i <= 5; i++) {
    name = rs.question('Digite seu nome: ');
    alt = Number(rs.question('Digite sua altura: '));
    if(alt > altM){
        altM = alt;
        nameM = name;
    }
}

console.log('o nome da pessoa mais alta e: '+ altM + ', e a o nome: '+ nameM);