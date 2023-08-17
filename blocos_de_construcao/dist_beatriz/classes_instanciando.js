"use strict";
/* Instanciando objetos de uma classe
**
** Autor: Fabrício G. M. de Carvalho
*/
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
var cachorro_1 = new classes_1.Cachorro("Lhasa");
console.log(cachorro_1.raca);
console.log(cachorro_1.latir());
