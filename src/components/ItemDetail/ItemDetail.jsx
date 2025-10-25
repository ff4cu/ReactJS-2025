import "./ItemDetail.css"
import { DetailJugador } from "./components/DetailJugador"

export const ItemDetail = ({ detail }) => {
    const { club, escudo, jugadores } = detail
    const arqueros = jugadores.filter((jugador) => jugador.position === "Arquero")
    const defensas = jugadores.filter((jugador) => jugador.position === "Defensa")
    const mediocampistas = jugadores.filter((jugador) => jugador.position === "Mediocampista")
    const delanteros = jugadores.filter((jugador) => jugador.position === "Delantero")
    return (
        <section>
            <div className="detalle-titulo">
                <img src={escudo} alt={club} className="escudo-detail"/>
                <h2>{club}</h2>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Arqueros</h3>  
                <DetailJugador jugadores={arqueros}/>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Defensas</h3>
                <DetailJugador jugadores={defensas}/>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Mediocampistas</h3>
                <DetailJugador jugadores={mediocampistas}/>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Delanteros</h3>
                <DetailJugador jugadores={delanteros}/>
            </div>
        </section>
    )
}