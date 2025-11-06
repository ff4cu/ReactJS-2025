import { Jugador } from "./Jugador";
import { Estado } from "./Estado";

export enum Posicion {
    ARQUERO = "ARQUERO",
    DEFENSA = "DEFENSA",
    MEDIOCAMPISTA ="MEDIOCAMPISTA",
    DELANTERO = "DELANTERO"
}
export class Arquero extends Jugador {
    posicion: Posicion.ARQUERO;
    constructor(id: string,
        nombre: string,
        estado: Estado.OPTIMO, posicion: Posicion.ARQUERO) {
        super(id, nombre, estado)
        this.posicion = posicion;
    }
}
export class Defensa extends Jugador {
    posicion: Posicion.DEFENSA;
    constructor(id: string,
        nombre: string,
        estado: Estado.OPTIMO, posicion: Posicion.DEFENSA) {
        super(id, nombre, estado)
        this.posicion = posicion;
    }
}
export class Mediocampista extends Jugador {
    posicion: Posicion.MEDIOCAMPISTA;
    constructor(id: string,
        nombre: string,
        estado: Estado.OPTIMO, posicion: Posicion.MEDIOCAMPISTA) {
        super(id, nombre, estado)
        this.posicion = posicion;
    }
}
export class Delantero extends Jugador {
    posicion: Posicion.DELANTERO;
    constructor(id: string,
        nombre: string,
        estado: Estado.OPTIMO, posicion: Posicion.DELANTERO) {
        super(id, nombre, estado)
        this.posicion = posicion;
    }
}