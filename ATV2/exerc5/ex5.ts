import * as rs from 'readline-sync';

let n1 = Number(rs.question("Digite um numero: "));
let n2 = Number(rs.question("Digite um numero: "));
let n3 = Number(rs.question("Digite um numero: "));

let rest:number = 0;

if(n1 == n2){
    rest ++;
}

if(n1 == n3){
    rest ++;
}

if(n2 == n1){
    rest ++;
}

if(n2 == n3){
    rest ++;
}

if(n3 == n2){
    rest ++;
}

if(n3 == n1){
    rest ++;
}


if(rest == 2 ){
    console.log('isósceles');

}else if (rest == 3){
    console.log('equilatero');
    
}else{
    console.log('escaleno');   
}

console.log(rest);