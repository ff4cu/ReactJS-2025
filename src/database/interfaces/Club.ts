import { Plantilla } from "./Plantilla"

export class Club {
    id: string;
    nombre: string;
    pais: string;
    liga: string;
    descripcion: string;
    plantilla: Plantilla;
    constructor(id: string,
        nombre: string,
        pais: string,
        liga: string,
        descripcion: string,
        plantilla: Plantilla) {
        this.id = id,
        this.nombre = nombre,
        this.pais = pais,
        this.liga = liga,
        this.descripcion = descripcion,
        this.plantilla = plantilla
    }
}