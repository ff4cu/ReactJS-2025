import { useEffect, useState } from "react"
import { DetailJugador } from "../ItemDetail/components/DetailJugador"
import "./ItemDestacadosConteiner.css"

export const ItemDestacadosConteiner = ({titulo}) => {
    const [club, setClubes] = useState([])
    const jugadores = []
    useEffect(() => {
        fetch("https://6913fa20f34a2ff1170db941.mockapi.io/clubes")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Hubo un problema")
                }
                return response.json();
            })
            .then((data) => {
                setClubes(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    for (let key in club) {
        let jugadoresLista = club[key].jugadores
        for (let i in jugadoresLista) {
            jugadores.push(jugadoresLista[i]);
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