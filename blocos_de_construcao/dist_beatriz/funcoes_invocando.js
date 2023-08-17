"use strict";
/* Invocando uma função definida em outro módulo
**
** Autor: Fabrício G. M. de Carvalho
*/
Object.defineProperty(exports, "__esModule", { value: true });
const funcoes_1 = require("./funcoes");
var x = 1;
var y = 2;
var z;
z = (0, funcoes_1.somar)(x, y);
console.log("z vale: ", z);
