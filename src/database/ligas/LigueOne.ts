import { Liga } from "../interfaces/Liga";
import { dataProvider } from "../dataProvider"
import { Club } from "../interfaces/Club";

let data: Club[] = dataProvider("Francia")

export class LigueOne extends Liga {
    constructor() {
        super({
            id: "3",
            nombre: "LigueOne",
            pais: "Francia",
            clubes: data
        })
    }
}