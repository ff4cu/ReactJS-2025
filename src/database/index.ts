import { Liga, Club } from "./interfaces";

const ligas: Liga[] = []
const dataProvider = (pais: string) => {
    let clubes: Club[] = []
    fetch("https://6913fa20f34a2ff1170db941.mockapi.io/clubes")
        .then(response =>
            response.json())
        .then((data) => {
            data.filter((c: Club) => {
                if (c.pais === pais) {
                    let nuevoClub = new Club(c.id, c.club, c.pais, c.liga, c.plantilla, c.jugadores)
                    clubes = [...clubes, nuevoClub]
                    const nuevaLIga = new Liga(c.id, c.liga, c.pais, clubes)
                    ligas.push(nuevaLIga)
                }
            })
        })
}
dataProvider("Francia")
dataProvider("Alemania")
dataProvider("Inglaterra")
dataProvider("España")
dataProvider("Italia")
export { ligas }