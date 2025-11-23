import { Jugador } from "./Jugador";

export class Club {
    id: string;
    club: string;
    pais: string;
    liga: string;
    plantilla: string;
    jugadores: Jugador[];
    constructor(id: string,
        club: string,
        pais: string,
        liga: string,
        plantilla: string,
        jugadores: Jugador[]) {
        this.id = id,
        this.club = club,
        this.pais = pais,
        this.liga = liga,
        this.plantilla = plantilla,
        this.jugadores = jugadores
    }
}