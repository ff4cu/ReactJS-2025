import { Liga } from "../interfaces/Liga";
import { dataProvider } from "../dataProvider"
import { Club } from "../interfaces/Club";

let data: Club[] = dataProvider("España")

export class LaLiga extends Liga {
    constructor() {
        super({
            id: "2",
            nombre: "LaLiga",
            pais: "España",
            clubes: data
        })
    }
}