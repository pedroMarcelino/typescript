import * as rs from 'readline-sync';
let txt: string;

do {
    txt = rs.question(`Digite uma palavra que tenha F ou comece com P `);
    txt = txt.toLowerCase();
} while (txt.indexOf('f') == -1 && txt.indexOf('p') != 0);