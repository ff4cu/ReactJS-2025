import { Club } from "./interfaces"

export const dataProvider = (pais: string) => {
    let db: Club[] = []
    let nuevoClub: Club
    fetch("https://6913fa20f34a2ff1170db941.mockapi.io/clubes")
        .then(response =>
            response.json())
        .then((data) => {
            data.filter((c: Club) => {
                if (c.pais === pais) {
                    nuevoClub = new Club(c.id, c.club, c.pais, c.liga, c.plantilla, c.jugadores)
                    db.push(nuevoClub)
                }
            })
        })
    return db
}