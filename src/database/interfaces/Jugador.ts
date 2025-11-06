import { Estado } from "./Estado";

export class Jugador {
    id: string;
    nombre: string;
    estado: Estado.OPTIMO;

    constructor(id: string, nombre: string, estado: Estado.OPTIMO) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
    }
}
