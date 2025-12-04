import { ligas } from "../../database/index"
import { DetailJugador } from "../ItemDetail/components/DetailJugador"
import "./ItemDestacadosConteiner.css"

export const ItemDestacadosConteiner = ({ titulo }) => {
    const jugadores = []
    for (let l in ligas) {
        let clubesLista = ligas[l].clubes
        for (let c in clubesLista) {
            let jugadoresLista = clubesLista[c].jugadores
            for (let j in jugadoresLista) {
                jugadores.push(jugadoresLista[j])
            }
        }
    }
    jugadores.map((j) => j.price = parseInt(j.price) * 1000);
    jugadores.sort(function (d1, d2) { return d1.price < d2.price ? 1 : -1 })
    return <div className="contenedor-main">
        <h1 className='titulo-destacados'>{titulo}</h1>
        <div className="contenedor-informacion">
            <main className="destacados">
                <DetailJugador jugadores={jugadores} />
            </main>
        </div>
    </div>
}