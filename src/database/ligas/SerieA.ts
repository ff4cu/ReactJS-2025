import { Liga } from "../interfaces/Liga";
import { dataProvider } from "../dataProvider"
import { Club } from "../interfaces/Club";

let data: Club[] = dataProvider("Italia")

export class SerieA extends Liga {
    constructor() {
        super({
            id: "5",
            nombre: "SerieA",
            pais: "Italia",
            clubes: data
        })
    }
}