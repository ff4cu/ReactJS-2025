import "./ItemDetail.css"
import { DetailJugador } from "./components/DetailJugador"

export const ItemDetail = ({ clubes }) => {
    return <>
        {clubes.length > 0 ? clubes.map((club) =>
            <section>
                <div className="detalle-titulo">
                    <h2>{club.club}</h2>
                </div>
                <div className="detalle-jugadores">
                    <h3 className="posiciones">Arqueros</h3>
                    <DetailJugador jugadores={club.jugadores.filter((j)=>j.position =="Arquero")} />
                </div>
                <div className="detalle-jugadores">
                    <h3 className="posiciones">Defensas</h3>
                    <DetailJugador jugadores={club.jugadores.filter((j)=>j.position =="Defensa")} />
                </div>
                <div className="detalle-jugadores">
                    <h3 className="posiciones">Mediocampistas</h3>
                    <DetailJugador jugadores={club.jugadores.filter((j)=>j.position =="Mediocampista")} />
                </div>
                <div className="detalle-jugadores">
                    <h3 className="posiciones">Delanteros</h3>
                    <DetailJugador jugadores={club.jugadores.filter((j)=>j.position =="Delantero")} />
                </div>
            </section>
        ) : <p>No se encontraron datos</p>}
    </>
}
