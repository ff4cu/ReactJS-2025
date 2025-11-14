import { Liga } from "../interfaces/Liga";
import { dataProvider } from "../dataProvider"
import { Club } from "../interfaces/Club";

let data: Club[] = dataProvider("Inglaterra")

export class PremierLeague extends Liga {
    constructor() {
        super({
            id: "4",
            nombre: "PremierLeague",
            pais: "Inglaterra",
            clubes: data
        })
    }
}