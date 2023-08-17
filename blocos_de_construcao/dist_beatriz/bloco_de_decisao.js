"use strict";
/* Blocos de decisão/execução condicional
** Autor: Fabrício Galende Marques de Carvalho
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* bloco if-else */
let a;
let b = 1;
if (b > 0) {
    a = 1;
}
else {
    a = 0;
}
console.log(a);
/* bloco switch-case */
let c = 10;
switch (c) {
    case 10:
        console.log("c é igual a 10");
        break;
    case 11:
        console.log("c é igual a 11");
        break;
    default:
        console.log("c possui outro valor");
}
