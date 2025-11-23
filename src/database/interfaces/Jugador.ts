export class Jugador {
    id: string;
    name: string;
    team: string;
    price: number;
    estado: string;
    position: string;

    constructor(id: string, name: string, estado: string, team: string,
        price: number, position: string) {
        this.id = id;
        this.name = name;
        this.team = team;
        this.price = price;
        this.estado = estado;
        this.position = position
    }
}
