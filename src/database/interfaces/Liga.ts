import { Club } from "./Club";

export class Liga {
    id: string;
    nombre: string;
    pais: string;
    clubes: Club[]
    constructor(
        id: string,
        nombre: string,
        pais: string,
        clubes: Club[]
    ) {
        this.id = id,
        this.nombre = nombre,
        this.pais = pais,
        this.clubes = clubes
    }
}
