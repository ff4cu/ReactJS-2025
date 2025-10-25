import "./ItemDetail.css"
import { useCartContext } from "../../context/CartContext/UseCartContext"

export const ItemDetail = ({ detail }) => {
    const { club, escudo, jugadores } = detail
    const arqueros = jugadores.filter((jugador) => jugador.position === "Arquero")
    const defensas = jugadores.filter((jugador) => jugador.position === "Defensa")
    const mediocampistas = jugadores.filter((jugador) => jugador.position === "Mediocampista")
    const delanteros = jugadores.filter((jugador) => jugador.position === "Delantero")
    const { addItem } = useCartContext()
    return (
        <section>
            <div className="detalle-titulo">
                <img src={escudo} alt={club} className="escudo-detail"/>
                <h2>{club}</h2>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Arqueros</h3>
                <div className="contenedor-position">
                    {arqueros.map((arquero) =>
                        <div className="jugador-position" id={arquero.name}>
                            <img src={arquero.image} alt={arquero.name} />
                            <p className="nombre-jugador">{arquero.name}</p>
                            <p>{arquero.price} €</p>
                            <div className="contenedor-btn">
                                <button className="comprar-boton" onClick={() => {
                                    addItem(arquero)
                                }}>Comprar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Defensas</h3>
                <div className="contenedor-position">
                    {defensas.map((defensa) =>
                        <div className="jugador-position" id={defensa.name}>
                            <img src={defensa.image} alt={defensa.name} />
                            <p>{defensa.name}</p>
                            <p>{defensa.price} €</p>
                            <div className="contenedor-btn">
                                <button className="comprar-boton" onClick={() => {
                                    addItem(defensa)
                                }}>Comprar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Mediocampistas</h3>
                <div className="contenedor-position">
                    {mediocampistas.map((mc) =>
                        <div className="jugador-position" id={mc.name}>
                            <img src={mc.image} alt={mc.name} />
                            <p>{mc.name}</p>
                            <p>{mc.price} €</p>
                            <div className="contenedor-btn">
                                <button className="comprar-boton" onClick={() => {
                                    addItem(mc)
                                }}>Comprar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="detalle-jugadores">
                <h3 className="posiciones">Delanteros</h3>
                <div className="contenedor-position">
                    {delanteros.map((delantero) =>
                        <div className="jugador-position" id={delantero.name}>
                            <img src={delantero.image} alt={delantero.name} />
                            <p>{delantero.name}</p>
                            <p>{delantero.price} €</p>
                            <div className="contenedor-btn">
                                <button className="comprar-boton" onClick={() => {
                                    addItem(delantero)
                                }}>Comprar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}