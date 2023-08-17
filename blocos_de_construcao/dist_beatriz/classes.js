"use strict";
/* Definindo classes
**
** Autor: Fabrício G. M. de Carvalho
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    raca;
    constructor(raca) {
        this.raca = raca;
    }
    latir() {
        return "au au au";
    }
}
exports.Cachorro = Cachorro;
