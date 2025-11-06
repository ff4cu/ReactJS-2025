import { Estado } from "./Estado";
import { Jugador } from "./Jugador";
import { Arquero, Defensa, Delantero, Mediocampista } from "./Posiciones";

export class Plantilla {
    arqueros: Arquero[];
    defensas: Defensa[];
    mediocampista: Mediocampista[];
    delanteros: Delantero[];
    titulares: Jugador[];
    suplentes: Jugador[];
    constructor(arqueros: Arquero[],
        defensas: Defensa[],
        mediocampista: Mediocampista[],
        delanteros: Delantero[],
        titulares: Jugador[],
        suplentes: Jugador[]) {
        this.arqueros = arqueros
        this.defensas = defensas
        this.mediocampista = mediocampista
        this.delanteros = delanteros
        this.titulares = titulares
        this.suplentes = suplentes
    }
    hacerTitular(jugador: Jugador) {
        if (this.titulares.length < 11 && jugador.estado === Estado.OPTIMO) {
            return [...this.titulares, jugador]
        }
    }
    hacerSuplente(jugador: Jugador) {
        if (this.titulares.some((j: Jugador) => j === jugador)) {
            this.titulares.splice(this.titulares.indexOf(jugador), 1)
            this.suplentes.push(jugador)
        }
    }
}