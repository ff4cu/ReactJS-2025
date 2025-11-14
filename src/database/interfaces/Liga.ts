import { Club } from "./Club";

export abstract class Liga {
    id: string;
    nombre: string;
    pais: string;
    clubes: Club[]
    constructor({ id, nombre, pais, clubes }: {
        id: string,
        nombre: string,
        pais: string,
        clubes: Club[]
    }) {
        this.id = id,
            this.nombre = nombre,
            this.pais = pais,
            this.clubes = clubes
    }
}