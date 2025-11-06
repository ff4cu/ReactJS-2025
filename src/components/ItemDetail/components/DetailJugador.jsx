import "./DetailJugador.css"
import { useCartContext } from "../../../context/CartContext/UseCartContext"

export const DetailJugador = ({ jugadores }) => {
    const { addItem, exists } = useCartContext()
    return <div className="contenedor-position">
        {jugadores.map((jugador) =>
            <div className="jugador-position" id={jugador.name}>
                <img src={jugador.image} alt={jugador.name} />
                <p className="nombre-jugador">{jugador.name}</p>
                <p>{jugador.price} €</p>
                <div className="contenedor-btn">
                    <button className={exists(jugador.id) ? "comprado" : "comprar-boton"} onClick={({ target }) => {
                        addItem(jugador)
                        exists(jugador.id) ? "" : target.style = "animation: fade-in .2s linear, fade-out .2s linear .2s forwards;"
                    }}>{exists(jugador.id) ? "Comprado" : "Comprar"}</button>
                </div>
            </div>
        )}
    </div>
}