import { Liga } from "../interfaces/Liga";
import { dataProvider } from "../dataProvider"
import { Club } from "../interfaces/Club";

let data: Club[] = dataProvider("Alemania")

export class Bundesliga extends Liga {
    constructor() {
        super({
            id: "1",
            nombre: "Bundesliga",
            pais: "Alemania",
            clubes: data
        })
    }
}