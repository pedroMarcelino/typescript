import * as rs from 'readline-sync';
let cont: boolean = true;
let nameArr: Array<string> = new Array;

do {
    let name = rs.question(`Digite o nome `);
    name = name.toLowerCase();

    if (name == 'sair') {
        cont = false;
    } else {
        nameArr.push(name);
    }
} while (cont);

console.log(nameArr)